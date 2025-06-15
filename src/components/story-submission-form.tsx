
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, FileText, Target } from "lucide-react";

const StorySubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    story: "",
    outcome: "",
    advice: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      console.log("Story submission:", formData);
      
      toast({
        title: "Story Submitted!",
        description: "Thank you for sharing your journey. We'll review your story and get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        title: "",
        story: "",
        outcome: "",
        advice: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-[#247EFF]/20 rounded-3xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream">
          Share Your Comeback Story
        </CardTitle>
        <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
          Help others see what's possible when you refuse to stay down.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#0A0A0A] dark:text-brand-cream flex items-center">
                <User className="w-4 h-4 mr-2" />
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="What should we call you?"
                required
                className="rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#0A0A0A] dark:text-brand-cream flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="text-[#0A0A0A] dark:text-brand-cream flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Story Title
            </Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Give your story a compelling title"
              required
              className="rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="story" className="text-[#0A0A0A] dark:text-brand-cream">
              Your Journey
            </Label>
            <Textarea
              id="story"
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              placeholder="Tell us about your struggle and how you overcame it. What was your starting point? What challenges did you face? How did you push through?"
              required
              rows={6}
              className="rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="outcome" className="text-[#0A0A0A] dark:text-brand-cream flex items-center">
              <Target className="w-4 h-4 mr-2" />
              The Results
            </Label>
            <Textarea
              id="outcome"
              name="outcome"
              value={formData.outcome}
              onChange={handleInputChange}
              placeholder="What did you achieve? How has your life changed? Be specific about the results."
              required
              rows={4}
              className="rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="advice" className="text-[#0A0A0A] dark:text-brand-cream">
              Your Advice
            </Label>
            <Textarea
              id="advice"
              name="advice"
              value={formData.advice}
              onChange={handleInputChange}
              placeholder="What would you tell someone in your old situation? What's the most important lesson you learned?"
              required
              rows={4}
              className="rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#247EFF] hover:bg-[#0057FF] text-white font-semibold py-4 rounded-2xl transition-all duration-300"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit Your Story
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StorySubmissionForm;
