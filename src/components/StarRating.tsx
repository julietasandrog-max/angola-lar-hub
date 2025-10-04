import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

const StarRating = ({ 
  rating, 
  maxRating = 5, 
  size = "md", 
  showValue = true,
  onRatingChange,
  readonly = false
}: StarRatingProps) => {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-6 w-6",
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= Math.round(rating);
        
        return (
          <button
            key={index}
            type="button"
            onClick={() => !readonly && onRatingChange?.(starValue)}
            disabled={readonly}
            className={cn(
              "transition-colors",
              !readonly && "cursor-pointer hover:scale-110",
              readonly && "cursor-default"
            )}
          >
            <Star
              className={cn(
                sizeClasses[size],
                isFilled ? "fill-warning text-warning" : "text-muted-foreground"
              )}
            />
          </button>
        );
      })}
      {showValue && (
        <span className="ml-1 text-sm font-bold">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;
