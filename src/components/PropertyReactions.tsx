import { useState } from "react";
import { Heart, ThumbsUp, Eye, Frown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

interface PropertyReactionsProps {
  propertyId: string;
  reactions?: {
    like: number;
    love: number;
    interested: number;
    sad: number;
  };
  userReaction?: 'like' | 'love' | 'interested' | 'sad' | null;
  className?: string;
}

const PropertyReactions = ({ propertyId, reactions, userReaction, className }: PropertyReactionsProps) => {
  const { user } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  const queryClient = useQueryClient();

  const reactionButtons = [
    { type: 'like' as const, icon: ThumbsUp, label: 'Gosto', count: reactions?.like || 0 },
    { type: 'love' as const, icon: Heart, label: 'Amo', count: reactions?.love || 0 },
    { type: 'interested' as const, icon: Eye, label: 'Interessado', count: reactions?.interested || 0 },
    { type: 'sad' as const, icon: Frown, label: 'Triste', count: reactions?.sad || 0 },
  ];

  const handleReaction = async (type: 'like' | 'love' | 'interested' | 'sad') => {
    if (!user) {
      toast.error("Faça login para reagir");
      return;
    }

    setIsUpdating(true);
    try {
      if (userReaction === type) {
        // Remove reaction
        await supabase
          .from('property_likes')
          .delete()
          .eq('property_id', propertyId)
          .eq('user_id', user.id);
      } else {
        // Add or update reaction
        await supabase
          .from('property_likes')
          .upsert({
            property_id: propertyId,
            user_id: user.id,
            reaction_type: type,
          });
      }
      
      queryClient.invalidateQueries({ queryKey: ['property', propertyId] });
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    } catch (error) {
      console.error('Error updating reaction:', error);
      toast.error("Erro ao reagir");
    } finally {
      setIsUpdating(false);
    }
  };

  const totalReactions = Object.values(reactions || {}).reduce((a, b) => a + b, 0);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex flex-wrap gap-2">
        {reactionButtons.map(({ type, icon: Icon, label, count }) => (
          <Button
            key={type}
            variant={userReaction === type ? "default" : "outline"}
            size="sm"
            className="gap-2"
            onClick={() => handleReaction(type)}
            disabled={isUpdating}
          >
            <Icon className={cn("h-4 w-4", userReaction === type && "fill-current")} />
            <span className="hidden sm:inline">{label}</span>
            {count > 0 && <span className="font-bold">{count}</span>}
          </Button>
        ))}
      </div>
      
      {totalReactions > 0 && (
        <p className="text-sm text-muted-foreground">
          {totalReactions} {totalReactions === 1 ? 'pessoa reagiu' : 'pessoas reagiram'} a este imóvel
        </p>
      )}
    </div>
  );
};

export default PropertyReactions;
