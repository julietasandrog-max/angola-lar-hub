import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-hover to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 drop-shadow-lg">
              Anuncie o seu imóvel <br />
              <span className="text-accent drop-shadow-lg">hoje mesmo</span>
            </h2>
            <p className="text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-semibold drop-shadow-md">
              Junte-se a milhares de proprietários que já vendem e arrendam os seus imóveis na nossa plataforma.
            </p>
            
            <Button variant="hero" className="bg-accent hover:bg-accent-hover text-accent-foreground text-xl font-black px-12 py-6">
              Começar Agora
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/15 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Publicação Rápida</h3>
              <p className="text-white/90 font-semibold">Anuncie o seu imóvel em menos de 5 minutos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/15 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">100% Seguro</h3>
              <p className="text-white/90 font-semibold">Todos os interessados são verificados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/15 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mais Visibilidade</h3>
              <p className="text-white/90 font-semibold">Alcance milhares de compradores potenciais</p>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-black mb-8">O que está incluído:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                <span className="font-semibold">Fotografias profissionais gratuitas</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                <span className="font-semibold">Descrição optimizada para SEO</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                <span className="font-semibold">Gestão de visitas automatizada</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                <span className="font-semibold">Relatórios de performance detalhados</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                <span className="font-semibold">Suporte técnico 24/7</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                <span className="font-semibold">Sistema anti-fraude integrado</span>
              </div>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-8">
            <div className="bg-accent/25 border-2 border-accent/40 rounded-xl p-6 inline-block shadow-xl">
              <span className="text-accent font-black text-lg">🔥 Promoção limitada:</span>
              <span className="text-white/95 ml-3 font-bold">Primeiros 3 meses grátis para novos anunciantes!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;