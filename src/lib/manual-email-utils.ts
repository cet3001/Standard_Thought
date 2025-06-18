
import { supabase } from '@/integrations/supabase/client'

export const manualSendPlaybook = async (email: string) => {
  try {
    console.log(`[MANUAL EMAIL] Starting manual playbook send for: ${email}`)
    
    // Check if user exists in subscribers
    const { data: subscriber, error: subscriberError } = await supabase
      .from('Subscribers')
      .select('*')
      .eq('email', email.trim().toLowerCase())
      .single()

    if (subscriberError || !subscriber) {
      console.error(`[MANUAL EMAIL] Subscriber not found for ${email}:`, subscriberError)
      throw new Error('Subscriber not found. Please make sure they are subscribed first.')
    }

    console.log(`[MANUAL EMAIL] Found subscriber for ${email}:`, subscriber)

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

    console.log(`[MANUAL EMAIL] Playbook sent successfully to ${email}:`, emailData)
    return { success: true, data: emailData }

  } catch (error) {
    console.error(`[MANUAL EMAIL] Manual playbook send error for ${email}:`, error)
    throw error
  }
}
