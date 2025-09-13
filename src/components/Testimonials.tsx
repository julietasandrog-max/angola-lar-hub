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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que os nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 2.500 famílias já encontraram a casa dos seus sonhos connosco.
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="flex justify-center mb-12">
          <div className="bg-success/10 border border-success/20 rounded-lg p-4 inline-flex items-center">
            <div className="flex items-center space-x-2 text-success font-semibold">
              <Star className="h-5 w-5 fill-current" />
              <span>4.9/5</span>
              <span className="text-muted-foreground font-normal">baseado em 1.200+ avaliações</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Property Info */}
              <div className="bg-secondary/50 rounded-md p-3 mb-4">
                <span className="text-sm text-muted-foreground">Imóvel:</span>
                <div className="font-medium text-sm">{testimonial.property}</div>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="trust-indicator">
            <div className="text-2xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Imóveis Verificados</div>
          </div>
          <div className="trust-indicator">
            <div className="text-2xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Resposta Garantida</div>
          </div>
          <div className="trust-indicator">
            <div className="text-2xl font-bold text-primary mb-2">5 Anos</div>
            <div className="text-sm text-muted-foreground">No Mercado</div>
          </div>
          <div className="trust-indicator">
            <div className="text-2xl font-bold text-primary mb-2">0%</div>
            <div className="text-sm text-muted-foreground">Comissão Compradores</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;