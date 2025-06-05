
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

    // Send welcome email after successful subscription
    try {
      console.log('Triggering welcome email for:', email)
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: { 
          email: email.trim().toLowerCase(),
          name: name || undefined
        }
      })

      if (emailError) {
        console.error('Welcome email error:', emailError)
        // Don't throw here - subscription was successful, email is just a bonus
      } else {
        console.log('Welcome email sent successfully:', emailData)
      }
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't throw here - subscription was successful
    }

    return data
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    throw error
  }
}
