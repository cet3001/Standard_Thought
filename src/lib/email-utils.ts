import { supabase } from '@/integrations/supabase/client'
import type { Database } from '@/integrations/supabase/types'
import { trackNewsletterSignup, trackPlaybookDownload } from '@/lib/analytics-utils'

type SubscriberInsert = Database['public']['Tables']['Subscribers']['Insert']

export const subscribeToNewsletter = async (email: string, name?: string) => {
  try {
    console.log(`[EMAIL DEBUG] Starting subscription process for: ${email}`)
    
    // Generate unsubscribe token
    const { data: tokenData, error: tokenError } = await supabase.rpc('generate_unsubscribe_token')
    
    if (tokenError) {
      console.error('Token generation error:', tokenError)
      throw new Error('Failed to generate unsubscribe token')
    }

    console.log(`[EMAIL DEBUG] Generated unsubscribe token for ${email}:`, tokenData)

    const { data, error } = await supabase
      .from('Subscribers')
      .insert([
        {
          email: email.trim().toLowerCase(),
          name: name || null,
          unsubscribe_token: tokenData,
          unsubscribed: false
        }
      ])
      .select()

    if (error) {
      console.error(`[EMAIL DEBUG] Database error for ${email}:`, error)
      if (error.code === '23505') { // Unique constraint violation
        throw new Error('This email is already subscribed!')
      }
      throw new Error(error.message)
    }

    console.log(`[EMAIL DEBUG] Successfully inserted ${email} into database:`, data)

    // Track newsletter signup
    trackNewsletterSignup(email)
    trackPlaybookDownload(email)

    // Send welcome email with playbook after successful subscription
    try {
      console.log(`[EMAIL DEBUG] Triggering welcome email for: ${email}`)
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: { 
          email: email.trim().toLowerCase(),
          name: name || undefined,
          unsubscribe_token: tokenData,
          include_playbook: true
        }
      })

      if (emailError) {
        console.error(`[EMAIL DEBUG] Welcome email error for ${email}:`, emailError)
        // Don't throw here - subscription was successful, email is just a bonus
      } else {
        console.log(`[EMAIL DEBUG] Welcome email sent successfully for ${email}:`, emailData)
      }
    } catch (emailError) {
      console.error(`[EMAIL DEBUG] Failed to send welcome email for ${email}:`, emailError)
      // Don't throw here - subscription was successful
    }

    return data
  } catch (error) {
    console.error(`[EMAIL DEBUG] Newsletter subscription error for ${email}:`, error)
    throw error
  }
}
