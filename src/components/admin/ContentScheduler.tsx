import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { supabase } from "@/integrations/supabase/client";
import { 
  CalendarIcon, 
  Clock, 
  Plus, 
  Send, 
  AlertTriangle,
  Flame,
  Target,
  BookOpen,
  Zap
} from "lucide-react";
import { format, addDays, addWeeks } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ContentSchedule {
  id: string;
  title: string;
  outline: string;
  pillar: string;
  scheduledDate: Date;
  status: 'scheduled' | 'draft' | 'published';
  priority: 'high' | 'medium' | 'low';
  gritFactor: number;
  reminderSent: boolean;
}

interface ContentTemplate {
  pillar: string;
  templates: {
    title: string;
    outline: string;
    gritFactor: number;
  }[];
}

const WEALTH_PILLARS = [
  'Credit Mastery',
  'Cash Flow',
  'Investment Strategy', 
  'Modern Hustles',
  'Mindset & Foundation'
];

const CONTENT_TEMPLATES: ContentTemplate[] = [
  {
    pillar: 'Credit Mastery',
    templates: [
      {
        title: 'Credit Blueprint: No Cosigner, Building from Scratch',
        outline: `
# The Raw Truth About Building Credit Without Help

## Opening Hook (Provocative)
- "Your parents didn't teach you this because they didn't know"
- The credit game is rigged, but we're learning the rules anyway

## Section 1: Why Traditional Advice Fails
- Cosigner mythology - most of us don't have that luxury
- Banks profit from keeping you ignorant
- The real cost of financial ignorance in our communities

## Section 2: The No-Cosigner Blueprint
- Secured cards that actually build (not just take your money)
- The 3-account strategy for rapid score building
- Timing your applications like a strategist, not a beginner

## Section 3: Advanced Moves
- Authorized user tactics (when you have zero family help)
- Credit utilization manipulation
- The dispute game that actually works

## Call to Action
- Join the builders who refuse to stay broke
- Download the exact spreadsheet template
        `,
        gritFactor: 9
      },
      {
        title: 'Credit Repair: DIY or Die Broke',
        outline: `
# Stop Paying Others to Fix What You Can Handle

## Opening
- Credit repair companies prey on desperation
- Your financial freedom shouldn't cost $2000

## DIY Strategy
- FCRA violation identification
- Dispute letter templates that work
- When to escalate to CFPB

## Legacy Focus
- Building credit for generational wealth
- Teaching kids what schools won't
        `,
        gritFactor: 8
      }
    ]
  },
  {
    pillar: 'Cash Flow',
    templates: [
      {
        title: 'Cash Management: When Every Dollar Matters',
        outline: `
# Managing Money When There's Never Enough

## Reality Check
- Budgeting advice written by people who never struggled
- The psychology of scarcity vs abundance mindset

## The Survival-to-Wealth Pipeline
- Emergency fund on $35K income (yes, it's possible)
- High-yield accounts that don't require $10K minimums
- Automating savings when cash flow is irregular

## Legacy Building
- Teaching kids money management from day one
- Breaking generational poverty patterns
        `,
        gritFactor: 8
      }
    ]
  },
  {
    pillar: 'Investment Strategy',
    templates: [
      {
        title: 'Investing on Minimum Wage: Small Money, Big Moves',
        outline: `
# Building Wealth When You're Starting from Zero

## Mindset Shift
- $25/month can become generational wealth
- Why Wall Street doesn't want you to know this

## Practical Strategy
- Index fund investing for beginners
- Dollar-cost averaging on irregular income
- Tax-advantaged accounts that benefit us most

## Community Wealth
- Investment clubs in urban areas
- Teaching financial literacy in our communities
        `,
        gritFactor: 9
      }
    ]
  },
  {
    pillar: 'Modern Hustles',
    templates: [
      {
        title: 'AI Side Hustles: Future-Proof Your Income',
        outline: `
# Using Technology to Build Multiple Income Streams

## The New Economy
- AI tools democratizing entrepreneurship
- Why traditional jobs won't build generational wealth

## Profitable AI Applications
- Content creation at scale
- Digital marketing automation
- E-commerce optimization

## Building Systems
- Turning side hustles into passive income
- Scaling without losing quality
        `,
        gritFactor: 7
      }
    ]
  },
  {
    pillar: 'Mindset & Foundation',
    templates: [
      {
        title: 'Generational Wealth Mindset: Breaking the Cycle',
        outline: `
# Thinking Beyond Survival Mode

## Generational Patterns
- How poverty mindset gets passed down
- Breaking cycles that started before you were born

## Wealth Building Psychology
- Delayed gratification in instant culture
- Building conviction when everyone doubts you

## Legacy Focus
- Making decisions your grandkids will thank you for
- Creating wealth that outlasts you
        `,
        gritFactor: 10
      }
    ]
  }
];

export const ContentScheduler: React.FC = () => {
  const [schedules, setSchedules] = useState<ContentSchedule[]>([]);
  const [newSchedule, setNewSchedule] = useState<Partial<ContentSchedule>>({
    pillar: '',
    priority: 'medium',
    gritFactor: 7,
    status: 'scheduled'
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [autoScheduleEnabled, setAutoScheduleEnabled] = useState(true);
  const [emailReminders, setEmailReminders] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadScheduledContent();
    if (autoScheduleEnabled) {
      generateBiWeeklySchedule();
    }
  }, []);

  const loadScheduledContent = () => {
    const saved = localStorage.getItem('urbanWealthContentSchedule');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSchedules(parsed.map((item: any) => ({
        ...item,
        scheduledDate: new Date(item.scheduledDate)
      })));
    }
  };

  const saveScheduledContent = (newSchedules: ContentSchedule[]) => {
    localStorage.setItem('urbanWealthContentSchedule', JSON.stringify(newSchedules));
    setSchedules(newSchedules);
  };

  const generateBiWeeklySchedule = () => {
    const existingSchedules = JSON.parse(localStorage.getItem('urbanWealthContentSchedule') || '[]');
    if (existingSchedules.length > 0) return; // Don't overwrite existing schedules

    const schedules: ContentSchedule[] = [];
    let currentDate = new Date();
    
    // Generate 8 weeks of bi-weekly content (4 posts)
    for (let week = 0; week < 8; week += 2) {
      const pillarIndex = Math.floor(week / 2) % WEALTH_PILLARS.length;
      const pillar = WEALTH_PILLARS[pillarIndex];
      const templates = CONTENT_TEMPLATES.find(t => t.pillar === pillar)?.templates || [];
      const template = templates[Math.floor(Math.random() * templates.length)];
      
      if (template) {
        schedules.push({
          id: `auto-${week}`,
          title: template.title,
          outline: template.outline,
          pillar,
          scheduledDate: addWeeks(currentDate, week),
          status: 'scheduled',
          priority: 'high',
          gritFactor: template.gritFactor,
          reminderSent: false
        });
      }
    }

    saveScheduledContent(schedules);
    toast({
      title: "Auto-Schedule Generated",
      description: "Bi-weekly content schedule created with pillar rotation",
    });
  };

  const addScheduledContent = () => {
    if (!newSchedule.title || !newSchedule.pillar || !selectedDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const schedule: ContentSchedule = {
      id: Date.now().toString(),
      title: newSchedule.title!,
      outline: newSchedule.outline || '',
      pillar: newSchedule.pillar!,
      scheduledDate: selectedDate,
      status: 'scheduled',
      priority: newSchedule.priority || 'medium',
      gritFactor: newSchedule.gritFactor || 7,
      reminderSent: false
    };

    const updatedSchedules = [...schedules, schedule];
    saveScheduledContent(updatedSchedules);

    // Reset form
    setNewSchedule({
      pillar: '',
      priority: 'medium',
      gritFactor: 7,
      status: 'scheduled'
    });
    setSelectedDate(undefined);

    toast({
      title: "Content Scheduled",
      description: "New content added to the schedule",
    });
  };

  const sendReminder = async (schedule: ContentSchedule) => {
    try {
      // This would call your email service
      // For now, we'll simulate it
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedSchedules = schedules.map(s => 
        s.id === schedule.id ? { ...s, reminderSent: true } : s
      );
      saveScheduledContent(updatedSchedules);

      toast({
        title: "Reminder Sent",
        description: `Email reminder sent for "${schedule.title}"`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reminder",
        variant: "destructive",
      });
    }
  };

  const loadTemplate = (pillar: string) => {
    const templates = CONTENT_TEMPLATES.find(t => t.pillar === pillar)?.templates || [];
    if (templates.length > 0) {
      const template = templates[Math.floor(Math.random() * templates.length)];
      setNewSchedule({
        ...newSchedule,
        title: template.title,
        outline: template.outline,
        pillar,
        gritFactor: template.gritFactor
      });
    }
  };

  const upcomingSchedules = schedules
    .filter(s => s.scheduledDate >= new Date() && s.status === 'scheduled')
    .sort((a, b) => a.scheduledDate.getTime() - b.scheduledDate.getTime());

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getGritFactorColor = (grit: number) => {
    if (grit >= 8) return 'text-green-600';
    if (grit >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Content Scheduler</h2>
          <p className="text-muted-foreground">
            Automate bi-weekly drops with provocative, legacy-focused content
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="auto-schedule"
              checked={autoScheduleEnabled}
              onCheckedChange={setAutoScheduleEnabled}
            />
            <Label htmlFor="auto-schedule">Auto-Schedule</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="email-reminders"
              checked={emailReminders}
              onCheckedChange={setEmailReminders}
            />
            <Label htmlFor="email-reminders">Email Reminders</Label>
          </div>
        </div>
      </div>

      {/* Content Guidelines */}
      <Alert>
        <Flame className="h-4 w-4" />
        <AlertDescription>
          <strong>Content Guidelines:</strong> Keep posts provocative and legacy-focused. 
          Challenge conventional wisdom. Address real struggles. Build generational wealth mindset.
          Target grit factor of 8+ for maximum community impact.
        </AlertDescription>
      </Alert>

      {/* Upcoming Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5" />
            Upcoming Content ({upcomingSchedules.length})
          </CardTitle>
          <CardDescription>
            Scheduled content drops with pillar rotation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSchedules.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No upcoming content scheduled
              </p>
            ) : (
              upcomingSchedules.map((schedule) => (
                <div key={schedule.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium">{schedule.title}</h4>
                      <Badge variant={getPriorityColor(schedule.priority) as any}>
                        {schedule.priority}
                      </Badge>
                      <Badge variant="outline">
                        {schedule.pillar}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        {format(schedule.scheduledDate, 'MMM dd, yyyy')}
                      </span>
                      <span className={`flex items-center font-medium ${getGritFactorColor(schedule.gritFactor)}`}>
                        <Zap className="mr-1 h-3 w-3" />
                        Grit: {schedule.gritFactor}/10
                      </span>
                      {schedule.reminderSent && (
                        <span className="flex items-center text-green-600">
                          <Send className="mr-1 h-3 w-3" />
                          Reminder Sent
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {!schedule.reminderSent && emailReminders && (
                      <Button
                        onClick={() => sendReminder(schedule)}
                        variant="outline"
                        size="sm"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Reminder
                      </Button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Add New Content */}
      <Card>
        <CardHeader>
          <CardTitle>Schedule New Content</CardTitle>
          <CardDescription>
            Add custom content or use wealth pillar templates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pillar">Wealth Pillar</Label>
              <Select 
                value={newSchedule.pillar} 
                onValueChange={(value) => {
                  setNewSchedule({ ...newSchedule, pillar: value });
                  loadTemplate(value);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select pillar" />
                </SelectTrigger>
                <SelectContent>
                  {WEALTH_PILLARS.map(pillar => (
                    <SelectItem key={pillar} value={pillar}>
                      {pillar}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Scheduled Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select 
                value={newSchedule.priority} 
                onValueChange={(value) => setNewSchedule({ ...newSchedule, priority: value as any })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="grit">Grit Factor (1-10)</Label>
              <Input
                type="number"
                min="1"
                max="10"
                value={newSchedule.gritFactor}
                onChange={(e) => setNewSchedule({ ...newSchedule, gritFactor: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              value={newSchedule.title}
              onChange={(e) => setNewSchedule({ ...newSchedule, title: e.target.value })}
              placeholder="Enter provocative, attention-grabbing title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="outline">Content Outline</Label>
            <Textarea
              value={newSchedule.outline}
              onChange={(e) => setNewSchedule({ ...newSchedule, outline: e.target.value })}
              placeholder="Detailed outline with hooks, sections, and CTAs"
              rows={10}
            />
          </div>

          <Button onClick={addScheduledContent} className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Schedule Content
          </Button>
        </CardContent>
      </Card>

      {/* Email Reminder Preview */}
      {emailReminders && (
        <Card>
          <CardHeader>
            <CardTitle>Email Reminder Template</CardTitle>
            <CardDescription>
              What content creators receive before each scheduled drop
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-bold mb-2">Subject: Time to Drop Some Real Talk 🔥</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Yo,</strong></p>
                <p>Your next content drop is scheduled for <strong>[DATE]</strong>.</p>
                <p><strong>Title:</strong> [TITLE]</p>
                <p><strong>Pillar:</strong> [PILLAR]</p>
                <p><strong>Target Grit Factor:</strong> [GRIT]/10</p>
                <p className="font-bold text-yellow-600">
                  🎯 REMINDER: Keep it provocative and legacy-focused. We're building generational wealth mindset, 
                  not feel-good fluff. Challenge them. Make them uncomfortable. That's where growth happens.
                </p>
                <p>Don't water down the grit.</p>
                <p><strong>- The Urban Wealth Team</strong></p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};