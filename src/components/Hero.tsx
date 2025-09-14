import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Animated Background GIF */}
      <div className="hero-gif-container">
        <img 
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Modern Houses Background"
          className="w-full h-full object-cover"
        />
        <div className="hero-gif-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white relative z-20">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/25 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30 shadow-2xl">
            <span className="text-sm font-bold text-white">🏆 Plataforma #1 em Angola</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight text-shadow-lg">
            Encontre a sua nova casa<br />
            <span className="text-accent drop-shadow-lg">em minutos</span>
          </h1>
          
          <p className="text-xl lg:text-3xl mb-10 text-white/95 max-w-2xl mx-auto font-semibold drop-shadow-md">
            Rápido, fácil e confiável. Milhares de imóveis verificados em todo o país.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto mb-12 border-2 border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary h-6 w-6" />
                <input
                  type="text"
                  placeholder="Localização"
                  className="w-full pl-12 pr-4 py-4 border-2 border-primary/20 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary font-semibold text-foreground"
                />
              </div>
              
              <select className="w-full px-4 py-4 border-2 border-primary/20 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary font-semibold text-foreground">
                <option>Tipo de Imóvel</option>
                <option>Apartamento</option>
                <option>Moradia</option>
                <option>Terreno</option>
                <option>Escritório</option>
              </select>
              
              <select className="w-full px-4 py-4 border-2 border-primary/20 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary font-semibold text-foreground">
                <option>Preço</option>
                <option>Até 50M Kz</option>
                <option>50M - 100M Kz</option>
                <option>100M - 200M Kz</option>
                <option>Mais de 200M Kz</option>
              </select>
            </div>
            
            <Button variant="hero" className="w-full md:w-auto mt-6 text-lg font-bold py-4 px-8 shadow-2xl">
              <Search className="mr-3 h-6 w-6" />
              Procurar Imóveis
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div>
              <div className="text-4xl font-black text-accent drop-shadow-lg">5.000+</div>
              <div className="text-white/90 font-semibold">Imóveis</div>
            </div>
            <div>
              <div className="text-4xl font-black text-accent drop-shadow-lg">2.500+</div>
              <div className="text-white/90 font-semibold">Clientes Felizes</div>
            </div>
            <div>
              <div className="text-4xl font-black text-accent drop-shadow-lg">98%</div>
              <div className="text-white/90 font-semibold">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;