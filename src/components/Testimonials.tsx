import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      location: "Luanda",
      avatar: "M",
      rating: 5,
      text: "Encontrei o apartamento perfeito em apenas 2 dias! A plataforma é muito fácil de usar e todos os imóveis são verificados. Recomendo!",
      property: "Apartamento T3 em Miramar"
    },
    {
      id: 2,
      name: "João Santos",
      location: "Benguela",
      avatar: "J",
      rating: 5,
      text: "Excelente atendimento e transparência total. Consegui vender a minha moradia rapidamente e sem complicações.",
      property: "Moradia T4 em Benguela"
    },
    {
      id: 3,
      name: "Ana Costa",
      location: "Huambo",
      avatar: "A",
      rating: 5,
      text: "A melhor plataforma de imóveis em Angola! Processo simples, seguro e confiável. Já recomendei para vários amigos.",
      property: "Terreno em Huambo"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            O que os nossos <span className="text-primary drop-shadow-sm">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold">
            Mais de 2.500 famílias já encontraram a casa dos seus sonhos connosco.
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="flex justify-center mb-12">
          <div className="bg-success/15 border-2 border-success/30 rounded-xl p-6 inline-flex items-center shadow-lg">
            <div className="flex items-center space-x-3 text-success font-bold text-lg">
              <Star className="h-6 w-6 fill-current" />
              <span className="text-xl">4.9/5</span>
              <span className="text-muted-foreground font-semibold">baseado em 1.200+ avaliações</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border-2 border-primary/10 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-primary/30 mb-6" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed font-medium text-lg">
                "{testimonial.text}"
              </p>

              {/* Property Info */}
              <div className="bg-secondary/70 rounded-lg p-4 mb-6">
                <span className="text-sm text-muted-foreground font-semibold">Imóvel:</span>
                <div className="font-bold text-sm text-primary">{testimonial.property}</div>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground font-semibold">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="trust-indicator">
            <div className="text-3xl font-black text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground font-semibold">Imóveis Verificados</div>
          </div>
          <div className="trust-indicator">
            <div className="text-3xl font-black text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground font-semibold">Resposta Garantida</div>
          </div>
          <div className="trust-indicator">
            <div className="text-3xl font-black text-primary mb-2">5 Anos</div>
            <div className="text-sm text-muted-foreground font-semibold">No Mercado</div>
          </div>
          <div className="trust-indicator">
            <div className="text-3xl font-black text-primary mb-2">0%</div>
            <div className="text-sm text-muted-foreground font-semibold">Comissão Compradores</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;