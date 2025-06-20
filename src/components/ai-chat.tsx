
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "What's good! I'm your AI financial advisor specializing in building generational wealth from nothing. Whether you need advice on side hustles, credit building, investing, or breaking generational poverty cycles - I got you. What's your biggest money challenge right now?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-ai', {
        body: {
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }
      });

      if (error) throw error;

      const aiMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "My bad, something went wrong. Try again in a sec.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="h-[600px] flex flex-col bg-white/95 dark:bg-brand-black/95 border border-[#247EFF]/20">
        {/* Chat Header */}
        <div className="border-b border-[#247EFF]/20 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#247EFF] flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-black dark:text-brand-cream">
                AI Financial Advisor
              </h3>
              <p className="text-sm text-brand-black/70 dark:text-brand-cream/70">
                Street-smart wealth building advice
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#247EFF] flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-[#247EFF] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-brand-black dark:text-brand-cream'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>

              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-[#247EFF] flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl">
                <Loader2 className="w-4 h-4 animate-spin text-[#247EFF]" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-[#247EFF]/20 p-4">
          <div className="flex gap-2">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about wealth building, side hustles, investing..."
              className="resize-none min-h-[44px] max-h-32"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-[#247EFF] hover:bg-[#0057FF] px-4"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIChat;
