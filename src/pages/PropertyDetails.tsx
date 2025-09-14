import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Share2, MapPin, Bed, Bath, Square, Car, Eye, Phone, MessageCircle, Calendar, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const PropertyDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image Gallery */}
      <section className="relative">
        <div className="aspect-[16/9] md:aspect-[21/9] bg-muted">
          <img 
            src="/src/assets/property-1.jpg" 
            alt="Apartamento T3 Moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Floating Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Price & Status */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-xl mb-3">
              <span className="text-2xl font-black">45.000.000 Kz</span>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-accent text-accent-foreground">Novo</Badge>
              <Badge className="bg-primary text-primary-foreground">Em destaque</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-black text-foreground mb-2">
                      Apartamento T3 Moderno em Talatona
                    </h1>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      <span className="font-semibold">Talatona, Luanda</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="badge-verified mb-2">
                      <CheckCircle className="h-4 w-4" />
                      Verificado
                    </div>
                    <div className="flex items-center text-warning">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      <span className="font-bold">4,8</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-6 w-6 text-primary" />
                    <span className="font-semibold">3 Quartos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-6 w-6 text-primary" />
                    <span className="font-semibold">2 Casas de banho</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="h-6 w-6 text-primary" />
                    <span className="font-semibold">120m²</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Garagem</span>
                  </div>
                </div>

                {/* Scarcity Indicator */}
                <div className="scarcity-indicator mb-6">
                  <div className="flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-warning" />
                    <span className="text-sm font-bold">
                      Mais 23 pessoas visualizaram este imóvel hoje
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Descrição</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Moderno apartamento T3 localizado em Talatona, uma das zonas mais procuradas de Luanda. 
                    O imóvel conta com acabamentos de primeira qualidade, cozinha equipada, varanda com vista 
                    para a cidade e garagem privativa. Condomínio fechado com segurança 24h, piscina e área de lazer.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Comodidades</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Piscina", "Segurança 24h", "Elevador", 
                    "Garagem", "Área de lazer", "Cozinha equipada",
                    "Ar condicionado", "Varanda", "Condomínio fechado"
                  ].map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                    alt="João Silva"
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-bold">João Silva</h4>
                  <p className="text-sm text-muted-foreground">Consultor Imobiliário</p>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="text-sm font-bold ml-1">4,9 • 127 avaliações</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                  <Button variant="cta" className="w-full" size="lg">
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Visita
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Similar Properties */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-4">Imóveis Similares</h4>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex space-x-3">
                      <img 
                        src={`/src/assets/property-${i + 1}.jpg`}
                        alt={`Propriedade ${i}`}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm">Casa T4 em Cacuaco</h5>
                        <p className="text-xs text-muted-foreground">120.000 Kz/mês</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Bed className="h-3 w-3 mr-1" />
                          4 • 
                          <Bath className="h-3 w-3 ml-1 mr-1" />
                          3
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;