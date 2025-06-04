
import { supabase } from '@/integrations/supabase/client'
import type { NewsletterSignup } from '@/integrations/supabase/types'

export const subscribeToNewsletter = async (email: string, source: NewsletterSignup['source']) => {
  try {
    const { data, error } = await supabase
      .from('newsletter_signups')
      .insert([
        {
          email: email.trim().toLowerCase(),
          source,
          is_active: true
        }
      ])
      .select()

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        throw new Error('This email is already subscribed!')
      }
      throw new Error(error.message)
    }

    return data
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    throw error
  }
}
