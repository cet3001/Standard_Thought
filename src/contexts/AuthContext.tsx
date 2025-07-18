
// Auth Context
// Purpose: Handles Supabase auth state and provides user info across the app.
// Why: Centralizes login logic so pages stay clean.
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
}

interface UserProfile {
  id: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
  updated_at: string;
}

const defaultValue: AuthContextType = {
  user: null,
  session: null,
  profile: null,
  loading: true,
  isAdmin: false,
  signOut: async (): Promise<void> => {},
  signIn: async (): Promise<{ error: Error | null }> => ({ error: null }),
  signUp: async (): Promise<{ error: Error | null }> => ({ error: null }),
};

const AuthContext = createContext<AuthContextType>(defaultValue);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async (userId: string) => {
    try {
      console.log('Fetching profile for user:', userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      console.log('Profile fetched:', data);
      setProfile(data);
    } catch (error: unknown) {
      console.error('Error fetching profile:', error);
    }
  }, []);

  useEffect(() => {
    console.log('🔐 Setting up Supabase auth...');
    
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Defer profile fetch to avoid blocking auth state update
          setTimeout(() => {
            fetchProfile(session.user.id);
          }, 0);
        } else {
          setProfile(null);
        }
        
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error);
      }
      
      console.log('Initial session:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    return () => {
      console.log('🔐 Cleaning up auth subscription');
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  const signOut = async () => {
    try {
      console.log('Signing out user...');
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
        throw error;
      }
      console.log('User signed out successfully');
    } catch (error: unknown) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      console.log('Signing in user:', email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Sign in error:', error);
      } else {
        console.log('User signed in successfully:', data.user?.email);
      }

      return { error };
    } catch (error: unknown) {
      console.error('Sign in error:', error);
      return { error: error instanceof Error ? error : new Error('Sign in failed') };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      console.log('Signing up user:', email);
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });
      
      if (error) {
        console.error('Sign up error:', error);
      } else {
        console.log('User signed up successfully - check email for confirmation');
      }
      
      return { error };
    } catch (error: unknown) {
      console.error('Sign up error:', error);
      return { error: error instanceof Error ? error : new Error('Sign up failed') };
    }
  };

  // You're an admin if your profile says so. That's it.
  const isAdmin = profile?.role === 'admin';

  console.log('Current auth state:', { 
    user: user?.email, 
    profile: profile?.email, 
    isAdmin, 
    loading 
  });

  const value = {
    user,
    session,
    profile,
    loading,
    isAdmin,
    signOut,
    signIn,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
