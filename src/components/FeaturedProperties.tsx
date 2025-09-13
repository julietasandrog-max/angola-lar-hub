import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const FeaturedProperties = () => {
  // Mock data - in real app this would come from API
  const featuredProperties = [
    {
      id: "1",
      title: "Apartamento T3 Moderno na Ilha de Luanda",
      price: "180M Kz",
      location: "Ilha de Luanda, Luanda",
      image: property1,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      hasGarage: true,
      isNew: true,
      isFeatured: true,
      isVerified: true,
      views: 24,
      type: "sale" as const,
    },
    {
      id: "2",
      title: "Moradia T4 com Piscina em Talatona",
      price: "350M Kz",
      location: "Talatona, Luanda",
      image: property2,
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      hasGarage: true,
      isNew: false,
      isFeatured: true,
      isVerified: true,
      views: 18,
      type: "sale" as const,
    },
    {
      id: "3",
      title: "Apartamento T2 para Arrendamento",
      price: "150K Kz",
      location: "Miramar, Luanda",
      image: property3,
      bedrooms: 2,
      bathrooms: 1,
      area: 80,
      hasGarage: false,
      isNew: false,
      isFeatured: true,
      isVerified: true,
      views: 32,
      type: "rent" as const,
    },
    {
      id: "4",
      title: "Escritório Moderno no Centro da Cidade",
      price: "250M Kz",
      location: "Baixa de Luanda, Luanda",
      image: property4,
      bedrooms: 0,
      bathrooms: 2,
      area: 100,
      hasGarage: true,
      isNew: true,
      isFeatured: true,
      isVerified: true,
      views: 15,
      type: "sale" as const,
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Imóveis em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleção especial de imóveis verificados com as melhores condições e localizações.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-hover font-semibold text-lg transition-colors">
            Ver Todos os Imóveis →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;