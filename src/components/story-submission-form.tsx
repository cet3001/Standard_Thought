
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, FileText, Target } from "lucide-react";
import { useSecureFormValidation, storySubmissionRateLimiter, getClientIdentifier, sanitizeText } from "@/lib/security-utils";

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const { validateForm } = useSecureFormValidation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeText(formData.name),
      email: sanitizeText(formData.email),
      title: sanitizeText(formData.title),
      story: sanitizeText(formData.story),
      outcome: sanitizeText(formData.outcome),
      advice: sanitizeText(formData.advice)
    };

    // Validate form
    const validation = validateForm(sanitizedData, {
      name: { required: true, type: 'text', minLength: 2, maxLength: 100 },
      email: { required: true, type: 'email' },
      title: { required: true, type: 'text', minLength: 5, maxLength: 200 },
      story: { required: true, type: 'text', minLength: 50, maxLength: 2000 },
      outcome: { required: true, type: 'text', minLength: 20, maxLength: 1000 },
      advice: { required: true, type: 'text', minLength: 20, maxLength: 1000 }
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form and try again.",
        variant: "destructive",
      });
      return;
    }

    // Rate limiting check
    const clientId = getClientIdentifier();
    if (!storySubmissionRateLimiter.isAllowed(clientId)) {
      const remainingTime = Math.ceil(storySubmissionRateLimiter.getRemainingTime(clientId) / 1000 / 60);
      toast({
        title: "Too many attempts",
        description: `Please wait ${remainingTime} minutes before submitting another story.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      console.log("Story submission:", sanitizedData);
      
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
                className={`rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                className={`rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
              className={`rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] ${errors.title ? 'border-red-500' : ''}`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
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
              className={`rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] resize-none ${errors.story ? 'border-red-500' : ''}`}
            />
            {errors.story && <p className="text-red-500 text-sm mt-1">{errors.story}</p>}
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
              className={`rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] resize-none ${errors.outcome ? 'border-red-500' : ''}`}
            />
            {errors.outcome && <p className="text-red-500 text-sm mt-1">{errors.outcome}</p>}
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
              className={`rounded-2xl border-[#247EFF]/20 focus:border-[#247EFF] resize-none ${errors.advice ? 'border-red-500' : ''}`}
            />
            {errors.advice && <p className="text-red-500 text-sm mt-1">{errors.advice}</p>}
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
