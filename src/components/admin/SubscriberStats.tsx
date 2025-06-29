
// Component: SubscriberStats
// Purpose: Show how many folks are still on the list so admins know who they're talkin' to.
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Loader2, Users } from "lucide-react";

export const SubscriberStats = () => {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["subscriber-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("Subscribers")
        .select("*", { count: "exact", head: true })
        .eq("unsubscribed", false);
      if (error) throw error;
      return count ?? 0;
    },
    staleTime: 60_000,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" /> Subscribers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary flex items-center gap-2">
          {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : data}
        </div>
        <p className="text-sm text-muted-foreground">
          Active subscribers who will receive emails
        </p>
        {error && <p className="text-xs text-destructive">{error.message}</p>}
      </CardContent>
    </Card>
  );
};
