
import { supabase } from '@/integrations/supabase/client'
import type { Database } from '@/integrations/supabase/types'

type SubscriberInsert = Database['public']['Tables']['Subscribers']['Insert']

export const subscribeToNewsletter = async (email: string, name?: string) => {
  try {
    const { data, error } = await supabase
      .from('Subscribers')
      .insert([
        {
          email: email.trim().toLowerCase(),
          name: name || null
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
