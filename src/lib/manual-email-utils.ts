
// Manual Playbook Sender
// Purpose: Send the welcome playbook to a subscriber on demand.
// Why: Useful for admins when automated flows miss someone.
import { supabase } from '@/integrations/supabase/client'

export const manualSendPlaybook = async (email: string) => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[MANUAL EMAIL] Starting manual playbook send for: ${email}`)
    }
    
    // Check if user exists in subscribers - get the first one if multiple exist
    const { data: subscribers, error: subscriberError } = await supabase
      .from('Subscribers')
      .select('*')
      .eq('email', email.trim().toLowerCase())
      .limit(1)

    if (subscriberError) {
      console.error(`[MANUAL EMAIL] Database error for ${email}:`, subscriberError)
      throw new Error(`Database error: ${subscriberError.message}`)
    }

    if (!subscribers || subscribers.length === 0) {
      console.error(`[MANUAL EMAIL] No subscriber found for ${email}`)
      throw new Error('Subscriber not found. Please make sure they are subscribed first.')
    }

    const subscriber = subscribers[0]
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[MANUAL EMAIL] Found subscriber for ${email}:`, subscriber)
    }

    // Send welcome email with playbook
    const { data: emailData, error: emailError } = await supabase.functions.invoke('send-welcome-email', {
      body: { 
        email: email.trim().toLowerCase(),
        name: subscriber.name || undefined,
        unsubscribe_token: subscriber.unsubscribe_token,
        include_playbook: true
      }
    })

    if (emailError) {
      console.error(`[MANUAL EMAIL] Error sending playbook to ${email}:`, emailError)
      throw new Error(`Failed to send playbook: ${emailError.message}`)
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log(`[MANUAL EMAIL] Playbook sent successfully to ${email}:`, emailData)
    }
    return { success: true, data: emailData }

  } catch (error) {
    console.error(`[MANUAL EMAIL] Manual playbook send error for ${email}:`, error)
    throw error
  }
}
