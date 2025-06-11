
-- Create a trigger function that will be called via database webhook
CREATE OR REPLACE FUNCTION notify_new_subscriber()
RETURNS TRIGGER AS $$
BEGIN
  -- Log the new subscriber for debugging
  RAISE LOG 'New subscriber added: % (ID: %)', NEW.email, NEW.id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger that fires after a new subscriber is inserted
DROP TRIGGER IF EXISTS trigger_notify_new_subscriber ON "Subscribers";
CREATE TRIGGER trigger_notify_new_subscriber
  AFTER INSERT ON "Subscribers"
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_subscriber();
