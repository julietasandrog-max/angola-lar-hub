import { Heart, MapPin, Bed, Bath, Square, Car, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  hasGarage?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  isVerified?: boolean;
  views: number;
  type: "sale" | "rent";
}

const PropertyCard = ({ 
  id, 
  title, 
  price, 
  location, 
  image, 
  bedrooms, 
  bathrooms, 
  area, 
  hasGarage = false,
  isNew = false,
  isFeatured = false,
  isVerified = false,
  views,
  type 
}: PropertyCardProps) => {
  return (
    <div className="property-card overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <span className="badge-new">Novo</span>}
          {isFeatured && <span className="badge-featured">Em destaque</span>}
        </div>
        
        {/* Favorite Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Price Tag */}
        <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-black text-lg shadow-lg">
          {price}
          {type === "rent" && <span className="text-xs ml-1">/mês</span>}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title & Verification */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-foreground line-clamp-2 flex-1 text-lg">
            {title}
          </h3>
          {isVerified && (
            <div className="badge-verified ml-2 text-xs">
              <CheckCircle className="h-3 w-3" />
              Verificado
            </div>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center text-muted-foreground text-sm mb-3 font-semibold">
          <MapPin className="h-5 w-5 mr-2 text-primary" />
          {location}
        </div>

        {/* Features */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3 font-semibold">
          <div className="flex items-center">
            <Bed className="h-5 w-5 mr-1 text-primary" />
            {bedrooms}
          </div>
          <div className="flex items-center">
            <Bath className="h-5 w-5 mr-1 text-primary" />
            {bathrooms}
          </div>
          <div className="flex items-center">
            <Square className="h-5 w-5 mr-1 text-primary" />
            {area}m²
          </div>
          {hasGarage && (
            <div className="flex items-center">
              <Car className="h-5 w-5 mr-1 text-primary" />
              Garagem
            </div>
          )}
        </div>

        {/* Scarcity Indicator */}
        <div className="scarcity-indicator mb-4">
          <div className="flex items-center">
            <Eye className="h-5 w-5 mr-2 text-warning" />
            <span className="text-sm font-bold">
              Mais {views} pessoas visualizaram hoje
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button variant="property" className="flex-1 font-bold">
            Ver Detalhes
          </Button>
          <Button variant="cta" className="flex-1 font-bold">
            Contactar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;