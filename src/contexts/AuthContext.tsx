
// Auth Context
// Purpose: Handles Supabase auth state and provides user info across the app.
// Why: Centralizes login logic so pages stay clean.
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
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
  last_login_at: string | null;
}

const defaultValue: AuthContextType = {
  user: null,
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
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async (userId: string) => {
    try {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Fetching profile for user:', userId);
      }
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      if (process.env.NODE_ENV !== 'production') {
        console.log('Profile fetched:', data);
      }
      setProfile(data);
    } catch (error: unknown) {
      console.error('Error fetching profile:', error);
    }
  }, []);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error);
      }
      
      if (process.env.NODE_ENV !== 'production') {
        console.log('Initial session:', session);
      }
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Auth state change:', event, session);
      }
      if (event === 'SIGNED_IN' && session?.user) {
        await supabase
          .from('profiles')
          .update({ last_login_at: new Date().toISOString() })
          .eq('id', session.user.id);
      }
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [fetchProfile]);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
        throw error;
      }
    } catch (error: unknown) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error && data?.user) {
        await supabase
          .from('profiles')
          .update({ last_login_at: new Date().toISOString() })
          .eq('id', data.user.id);
      }

      return { error };
    } catch (error: unknown) {
      console.error('Sign in error:', error);
      return { error: error instanceof Error ? error : new Error('Sign in failed') };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });
      return { error };
    } catch (error: unknown) {
      console.error('Sign up error:', error);
      return { error: error instanceof Error ? error : new Error('Sign up failed') };
    }
  };

  // Check if user is admin - either by profile role or by email
  const isAdmin = profile?.role === 'admin' || user?.email === 'cet3001@gmail.com';

  if (process.env.NODE_ENV !== 'production') {
    console.log('Current auth state:', { user: user?.email, profile, isAdmin, loading });
  }

  const value = {
    user,
    profile,
    loading,
    isAdmin,
    signOut,
    signIn,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
