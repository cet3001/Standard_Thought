import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Target, 
  Users, 
  Clock, 
  BarChart3,
  Eye,
  MousePointer,
  BookOpen,
  Zap,
  Flame
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface AnalyticsData {
  action: string;
  category: string;
  label?: string;
  value?: number;
  timestamp: string;
  custom_parameters?: {
    wealth_building_stage?: string;
    community_focus?: string;
    grit_factor?: number;
    mindset_content?: boolean;
    wealth_pillar?: string;
    grit_score?: number;
  };
}

interface AlertData {
  type: string;
  message: string;
  path: string;
  timeOnPage: number;
  timestamp: string;
  severity: 'high' | 'medium' | 'low';
}

export const AnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [alerts, setAlerts] = useState<AlertData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalyticsData();
  }, []);

  const loadAnalyticsData = () => {
    try {
      setLoading(true);
      
      // Load from localStorage (in production, this would come from GA API)
      const storedAnalytics = JSON.parse(localStorage.getItem('urbanWealthAnalytics') || '[]');
      const storedAlerts = JSON.parse(localStorage.getItem('urbanWealthAlerts') || '[]');
      
      setAnalyticsData(storedAnalytics);
      setAlerts(storedAlerts.slice(-10)); // Show last 10 alerts
      
    } catch (error) {
      console.error('Error loading analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate metrics
  const calculateMetrics = () => {
    const last7Days = analyticsData.filter(item => {
      const itemDate = new Date(item.timestamp);
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - 7);
      return itemDate >= cutoff;
    });

    const bounces = last7Days.filter(item => item.action === 'bounce');
    const engagements = last7Days.filter(item => item.action !== 'bounce');
    const mindsetContent = last7Days.filter(item => item.custom_parameters?.mindset_content);
    
    const totalPageViews = last7Days.length;
    const bounceRate = totalPageViews > 0 ? (bounces.length / totalPageViews) * 100 : 0;
    const avgGritScore = last7Days.reduce((sum, item) => sum + (item.custom_parameters?.grit_score || 0), 0) / (last7Days.length || 1);
    const mindsetBounceRate = mindsetContent.length > 0 ? 
      (mindsetContent.filter(item => item.action === 'bounce').length / mindsetContent.length) * 100 : 0;

    return {
      totalPageViews,
      bounceRate,
      avgGritScore,
      mindsetBounceRate,
      totalEngagements: engagements.length,
      avgTimeOnPage: engagements.reduce((sum, item) => sum + (item.value || 0), 0) / (engagements.length || 1)
    };
  };

  const metrics = calculateMetrics();

  // Generate chart data
  const generateChartData = () => {
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayData = analyticsData.filter(item => 
        item.timestamp.startsWith(dateStr)
      );
      
      const bounces = dayData.filter(item => item.action === 'bounce').length;
      const total = dayData.length;
      
      last7Days.push({
        date: date.toLocaleDateString('en-US', { weekday: 'short' }),
        pageViews: total,
        bounceRate: total > 0 ? (bounces / total) * 100 : 0,
        gritScore: dayData.reduce((sum, item) => sum + (item.custom_parameters?.grit_score || 0), 0) / (dayData.length || 1)
      });
    }
    return last7Days;
  };

  const chartData = generateChartData();

  // Wealth pillar performance
  const getPillarPerformance = () => {
    const pillars = ['Credit Mastery', 'Cash Flow', 'Investment Strategy', 'Modern Hustles', 'Mindset & Foundation'];
    return pillars.map(pillar => {
      const pillarData = analyticsData.filter(item => item.custom_parameters?.wealth_pillar === pillar);
      const bounces = pillarData.filter(item => item.action === 'bounce').length;
      const bounceRate = pillarData.length > 0 ? (bounces / pillarData.length) * 100 : 0;
      const avgGrit = pillarData.reduce((sum, item) => sum + (item.custom_parameters?.grit_score || 0), 0) / (pillarData.length || 1);
      
      return {
        pillar,
        bounceRate,
        avgGrit,
        totalViews: pillarData.length
      };
    });
  };

  const pillarData = getPillarPerformance();

  const getAlertSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const clearAlerts = () => {
    localStorage.removeItem('urbanWealthAlerts');
    setAlerts([]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <BarChart3 className="h-8 w-8 animate-pulse mx-auto mb-2" />
          <p>Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Urban Wealth Analytics</h2>
          <p className="text-muted-foreground">
            Track engagement and grit factor across wealth-building content
          </p>
        </div>
        <Button onClick={loadAnalyticsData} variant="outline">
          <BarChart3 className="mr-2 h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
              Content Performance Alerts
            </h3>
            <Button onClick={clearAlerts} variant="ghost" size="sm">
              Clear All
            </Button>
          </div>
          {alerts.map((alert, index) => (
            <Alert key={index} variant={getAlertSeverityColor(alert.severity) as any}>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <div className="flex justify-between items-start">
                  <div>
                    <strong>{alert.message}</strong>
                    <p className="text-sm mt-1">
                      Path: {alert.path} • Time: {alert.timeOnPage}s • 
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <Badge variant={getAlertSeverityColor(alert.severity) as any}>
                    {alert.severity}
                  </Badge>
                </div>
              </AlertDescription>
            </Alert>
          ))}
        </div>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.bounceRate.toFixed(1)}%
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              {metrics.bounceRate > 60 ? (
                <TrendingUp className="h-3 w-3 text-red-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-green-500" />
              )}
              <span>Last 7 days</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mindset Bounce Rate</CardTitle>
            <Flame className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.mindsetBounceRate.toFixed(1)}%
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              {metrics.mindsetBounceRate > 50 ? (
                <AlertTriangle className="h-3 w-3 text-yellow-500" />
              ) : (
                <Target className="h-3 w-3 text-green-500" />
              )}
              <span>Grit content focus</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Grit Score</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.avgGritScore.toFixed(1)}/10
            </div>
            <Progress value={metrics.avgGritScore * 10} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Engagements</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.totalEngagements}
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Avg: {Math.round(metrics.avgTimeOnPage)}s</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pillars">Wealth Pillars</TabsTrigger>
          <TabsTrigger value="content">Content Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Engagement Trends</CardTitle>
              <CardDescription>
                Track how your urban wealth content is resonating with the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="pageViews" stroke="#8884d8" name="Page Views" />
                  <Line yAxisId="right" type="monotone" dataKey="bounceRate" stroke="#82ca9d" name="Bounce Rate %" />
                  <Line yAxisId="right" type="monotone" dataKey="gritScore" stroke="#ffc658" name="Grit Score" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pillars" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Wealth Pillar Performance</CardTitle>
              <CardDescription>
                See which pillars are building the most grit and engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pillarData.map((pillar, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{pillar.pillar}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>{pillar.totalViews} views</span>
                        <span>Grit: {pillar.avgGrit.toFixed(1)}/10</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">
                        {pillar.bounceRate.toFixed(1)}%
                      </div>
                      <div className="text-sm text-muted-foreground">bounce rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Grit Analysis</CardTitle>
              <CardDescription>
                Monitor if content maintains the raw, unfiltered edge that builds real wealth mindset
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <Flame className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Grit Factor Guidelines:</strong> Content scoring below 6/10 may be losing its edge. 
                    Keep it provocative, legacy-focused, and rooted in real struggle.
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">High-Performing Content</h4>
                    <div className="text-2xl font-bold text-green-600">
                      {analyticsData.filter(item => (item.custom_parameters?.grit_score || 0) >= 7).length}
                    </div>
                    <p className="text-sm text-muted-foreground">Posts with grit score ≥ 7</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Needs More Edge</h4>
                    <div className="text-2xl font-bold text-yellow-600">
                      {analyticsData.filter(item => (item.custom_parameters?.grit_score || 0) < 6).length}
                    </div>
                    <p className="text-sm text-muted-foreground">Posts with grit score &lt; 6</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};