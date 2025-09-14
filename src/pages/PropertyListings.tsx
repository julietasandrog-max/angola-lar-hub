import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Search, Filter, MapPin, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PropertyListings = () => {
  const properties = [
    {
      id: "1",
      title: "Apartamento T3 Moderno em Talatona",
      price: "45.000.000 Kz",
      location: "Talatona, Luanda",
      image: "/src/assets/property-1.jpg",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      hasGarage: true,
      isNew: true,
      isFeatured: true,
      isVerified: true,
      views: 23,
      type: "sale" as const
    },
    {
      id: "2",
      title: "Casa T4 com Quintal em Cacuaco",
      price: "120.000 Kz",
      location: "Cacuaco, Luanda",
      image: "/src/assets/property-2.jpg",
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      hasGarage: true,
      isNew: false,
      isFeatured: false,
      isVerified: true,
      views: 45,
      type: "rent" as const
    },
    {
      id: "3",
      title: "Vivenda T5 de Luxo em Luanda Sul",
      price: "85.000.000 Kz",
      location: "Luanda Sul",
      image: "/src/assets/property-3.jpg",
      bedrooms: 5,
      bathrooms: 4,
      area: 350,
      hasGarage: true,
      isNew: false,
      isFeatured: true,
      isVerified: true,
      views: 67,
      type: "sale" as const
    },
    {
      id: "4",
      title: "Apartamento T2 Centro da Cidade",
      price: "80.000 Kz",
      location: "Ingombota, Luanda",
      image: "/src/assets/property-4.jpg",
      bedrooms: 2,
      bathrooms: 1,
      area: 80,
      hasGarage: false,
      isNew: false,
      isFeatured: false,
      isVerified: false,
      views: 12,
      type: "rent" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search & Filters Section */}
      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
                  <Input 
                    placeholder="Localização, bairro..." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="vivenda">Vivenda</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-20">0 - 20M Kz</SelectItem>
                  <SelectItem value="20-50">20M - 50M Kz</SelectItem>
                  <SelectItem value="50-100">50M - 100M Kz</SelectItem>
                  <SelectItem value="100+">100M+ Kz</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Quartos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+ Quarto</SelectItem>
                  <SelectItem value="2">2+ Quartos</SelectItem>
                  <SelectItem value="3">3+ Quartos</SelectItem>
                  <SelectItem value="4">4+ Quartos</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Button variant="default" className="flex-1">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-foreground mb-2">
                Imóveis Disponíveis
              </h1>
              <p className="text-muted-foreground">
                Encontrados 2.847 imóveis em Luanda
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Ordenar por:</span>
              <Select defaultValue="recent">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais recentes</SelectItem>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                  <SelectItem value="popular">Mais populares</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Carregar mais imóveis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyListings;