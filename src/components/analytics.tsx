
import { useGoogleAnalytics } from "@/lib/google-analytics";

// Component to initialize Google Analytics inside router context
export const AnalyticsTracker = () => {
  useGoogleAnalytics();
  return null; // This component doesn't render anything
};

export default AnalyticsTracker;
