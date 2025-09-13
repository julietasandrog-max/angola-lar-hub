import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient relative py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🏆 Plataforma #1 em Angola</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Encontre a sua nova casa<br />
            <span className="text-accent">em minutos</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Rápido, fácil e confiável. Milhares de imóveis verificados em todo o país.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Localização"
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <select className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                <option>Tipo de Imóvel</option>
                <option>Apartamento</option>
                <option>Moradia</option>
                <option>Terreno</option>
                <option>Escritório</option>
              </select>
              
              <select className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                <option>Preço</option>
                <option>Até 50M Kz</option>
                <option>50M - 100M Kz</option>
                <option>100M - 200M Kz</option>
                <option>Mais de 200M Kz</option>
              </select>
            </div>
            
            <Button variant="hero" className="w-full md:w-auto mt-4">
              <Search className="mr-2 h-5 w-5" />
              Procurar Imóveis
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">5.000+</div>
              <div className="text-white/80">Imóveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">2.500+</div>
              <div className="text-white/80">Clientes Felizes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-white/80">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;