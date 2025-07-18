export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author_id: string
          category: string
          comments_enabled: boolean | null
          content: string
          created_at: string
          display_tag: string | null
          excerpt: string
          featured: boolean | null
          id: string
          image_url: string | null
          meta_description: string | null
          meta_keywords: string | null
          published: boolean | null
          slug: string | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          category: string
          comments_enabled?: boolean | null
          content: string
          created_at?: string
          display_tag?: string | null
          excerpt: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          published?: boolean | null
          slug?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          category?: string
          comments_enabled?: boolean | null
          content?: string
          created_at?: string
          display_tag?: string | null
          excerpt?: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          published?: boolean | null
          slug?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      builder_stories: {
        Row: {
          avatar_url: string | null
          city_area: string
          created_at: string
          id: string
          is_active: boolean
          name: string
          quote: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          city_area: string
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          quote: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          city_area?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          quote?: string
          updated_at?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          approved: boolean
          author_email: string
          author_name: string
          blog_post_id: string
          content: string
          created_at: string
          id: string
        }
        Insert: {
          approved?: boolean
          author_email: string
          author_name: string
          blog_post_id: string
          content: string
          created_at?: string
          id?: string
        }
        Update: {
          approved?: boolean
          author_email?: string
          author_name?: string
          blog_post_id?: string
          content?: string
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_blog_post_id_fkey"
            columns: ["blog_post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      email_campaigns: {
        Row: {
          campaign_type: string
          created_at: string
          created_by: string | null
          failed_count: number
          id: string
          sent_at: string | null
          sent_count: number
          subject: string
        }
        Insert: {
          campaign_type: string
          created_at?: string
          created_by?: string | null
          failed_count?: number
          id?: string
          sent_at?: string | null
          sent_count?: number
          subject: string
        }
        Update: {
          campaign_type?: string
          created_at?: string
          created_by?: string | null
          failed_count?: number
          id?: string
          sent_at?: string | null
          sent_count?: number
          subject?: string
        }
        Relationships: []
      }
      email_sends: {
        Row: {
          campaign_id: string | null
          clicked_at: string | null
          id: string
          opened_at: string | null
          sent_at: string
          status: string
          subscriber_email: string
        }
        Insert: {
          campaign_id?: string | null
          clicked_at?: string | null
          id?: string
          opened_at?: string | null
          sent_at?: string
          status?: string
          subscriber_email: string
        }
        Update: {
          campaign_id?: string | null
          clicked_at?: string | null
          id?: string
          opened_at?: string | null
          sent_at?: string
          status?: string
          subscriber_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_sends_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "email_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      guide_downloads: {
        Row: {
          downloaded_at: string
          file_path: string
          guide_name: string
          id: string
          ip_address: unknown | null
          user_agent: string | null
          user_email: string
        }
        Insert: {
          downloaded_at?: string
          file_path: string
          guide_name: string
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_email: string
        }
        Update: {
          downloaded_at?: string
          file_path?: string
          guide_name?: string
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_email?: string
        }
        Relationships: []
      }
      guides: {
        Row: {
          bullets: string[] | null
          created_at: string
          created_by: string
          description: string
          file_name: string | null
          file_path: string | null
          id: string
          is_active: boolean
          price: number
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          bullets?: string[] | null
          created_at?: string
          created_by: string
          description: string
          file_name?: string | null
          file_path?: string | null
          id?: string
          is_active?: boolean
          price?: number
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          bullets?: string[] | null
          created_at?: string
          created_by?: string
          description?: string
          file_name?: string | null
          file_path?: string | null
          id?: string
          is_active?: boolean
          price?: number
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          id: string
          role: Database["public"]["Enums"]["user_role"] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string
        }
        Relationships: []
      }
      seo_settings: {
        Row: {
          created_at: string
          description: string
          id: string
          is_active: boolean
          keywords: string | null
          meta_image: string | null
          og_description: string | null
          og_image: string | null
          og_title: string | null
          page_type: string
          title: string
          twitter_description: string | null
          twitter_image: string | null
          twitter_title: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          is_active?: boolean
          keywords?: string | null
          meta_image?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          page_type: string
          title: string
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          keywords?: string | null
          meta_image?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          page_type?: string
          title?: string
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      Subscribers: {
        Row: {
          created_at: string
          email: string | null
          id: number
          name: string | null
          unsubscribe_token: string | null
          unsubscribed: boolean | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          unsubscribe_token?: string | null
          unsubscribed?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          unsubscribe_token?: string | null
          unsubscribed?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      active_subscriber_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      generate_slug: {
        Args: { title: string }
        Returns: string
      }
      generate_unsubscribe_token: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_admin_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      unsubscribe_user: {
        Args: { token: string }
        Returns: boolean
      }
    }
    Enums: {
      user_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["admin", "user"],
    },
  },
} as const
