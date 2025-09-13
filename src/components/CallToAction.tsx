import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-hover text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Anuncie o seu imóvel <br />
              <span className="text-accent">hoje mesmo</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de proprietários que já vendem e arrendam os seus imóveis na nossa plataforma.
            </p>
            
            <Button variant="hero" className="bg-accent hover:bg-accent-hover text-accent-foreground">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Publicação Rápida</h3>
              <p className="text-white/80">Anuncie o seu imóvel em menos de 5 minutos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
              <p className="text-white/80">Todos os interessados são verificados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mais Visibilidade</h3>
              <p className="text-white/80">Alcance milhares de compradores potenciais</p>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">O que está incluído:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Fotografias profissionais gratuitas</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Descrição optimizada para SEO</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Gestão de visitas automatizada</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Relatórios de performance detalhados</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Suporte técnico 24/7</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Sistema anti-fraude integrado</span>
              </div>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-8">
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 inline-block">
              <span className="text-accent font-semibold">🔥 Promoção limitada:</span>
              <span className="text-white/90 ml-2">Primeiros 3 meses grátis para novos anunciantes!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;