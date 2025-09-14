import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Shield, X } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "Grátis",
      period: "",
      description: "Perfeito para começar",
      icon: Shield,
      features: [
        "1 anúncio ativo",
        "Fotos básicas (até 5)",
        "Listagem por 30 dias",
        "Suporte por email",
        "Estatísticas básicas"
      ],
      limitations: [
        "Sem destaque",
        "Sem prioridade na busca",
        "Sem suporte prioritário"
      ],
      recommended: false,
      buttonText: "Começar grátis",
      buttonVariant: "outline" as const
    },
    {
      name: "Profissional",
      price: "15.000",
      period: "/mês",
      description: "Para vendedores ativos",
      icon: Star,
      features: [
        "Até 10 anúncios ativos",
        "Fotos de alta qualidade (até 15)",
        "Destaque na busca",
        "Listagem por 60 dias",
        "Selo 'Anunciante Verificado'",
        "Estatísticas avançadas",
        "Suporte prioritário",
        "Renovação automática"
      ],
      limitations: [],
      recommended: true,
      buttonText: "Escolher Profissional",
      buttonVariant: "default" as const
    },
    {
      name: "Premium",
      price: "35.000",
      period: "/mês",
      description: "Para imobiliárias e grandes vendedores",
      icon: Crown,
      features: [
        "Anúncios ilimitados",
        "Fotos profissionais ilimitadas",
        "Tour virtual 360°",
        "Prioridade máxima na busca",
        "Listagem por 90 dias",
        "Página de empresa personalizada",
        "Selo 'Parceiro Premium'",
        "Relatórios detalhados",
        "Gestor de conta dedicado",
        "API de integração",
        "Suporte 24/7"
      ],
      limitations: [],
      recommended: false,
      buttonText: "Escolher Premium",
      buttonVariant: "cta" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Planos que se ajustam ao seu negócio
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escolha o plano ideal para vender ou arrendar os seus imóveis com máxima eficiência
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-primary" />
            <span>Sem taxas de setup</span>
            <Check className="h-4 w-4 text-primary ml-4" />
            <span>Cancele a qualquer momento</span>
            <Check className="h-4 w-4 text-primary ml-4" />
            <span>Suporte em português</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative ${plan.recommended ? 'ring-2 ring-primary shadow-2xl scale-105' : 'shadow-lg'}`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full ${plan.recommended ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-black">{plan.name}</CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-black text-foreground">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <>
                          <span className="text-lg text-muted-foreground">{plan.period}</span>
                          <p className="text-sm text-muted-foreground mt-1">Kz, pago mensalmente</p>
                        </>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button 
                      variant={plan.buttonVariant} 
                      className="w-full" 
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Incluído:
                      </h4>
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Limitações:
                        </h4>
                        {plan.limitations.map((limitation, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            Compare todos os recursos
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Recursos</th>
                    <th className="text-center p-4 font-semibold">Básico</th>
                    <th className="text-center p-4 font-semibold">Profissional</th>
                    <th className="text-center p-4 font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { feature: "Anúncios ativos", basic: "1", pro: "10", premium: "Ilimitado" },
                    { feature: "Fotografias por anúncio", basic: "5", pro: "15", premium: "Ilimitadas" },
                    { feature: "Duração do anúncio", basic: "30 dias", pro: "60 dias", premium: "90 dias" },
                    { feature: "Destaque na busca", basic: false, pro: true, premium: true },
                    { feature: "Tour virtual 360°", basic: false, pro: false, premium: true },
                    { feature: "Página de empresa", basic: false, pro: false, premium: true },
                    { feature: "Suporte prioritário", basic: false, pro: true, premium: true },
                    { feature: "Relatórios avançados", basic: false, pro: true, premium: true },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-muted/20">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.basic === 'boolean' ? (
                          row.basic ? <Check className="h-4 w-4 text-primary mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        ) : (
                          row.basic
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <Check className="h-4 w-4 text-primary mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        ) : (
                          row.pro
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? <Check className="h-4 w-4 text-primary mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        ) : (
                          row.premium
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Posso mudar de plano a qualquer momento?",
                answer: "Sim, pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações entram em vigor imediatamente."
              },
              {
                question: "Existe algum compromisso de permanência?",
                answer: "Não, todos os nossos planos são mensais e pode cancelar a qualquer momento sem penalizações."
              },
              {
                question: "Como funciona o pagamento?",
                answer: "Aceitamos pagamentos via Multicaixa Express, PayPal, cartão de crédito e transferência bancária. O pagamento é processado mensalmente."
              },
              {
                question: "O que acontece se exceder o limite de anúncios?",
                answer: "Se exceder o limite, pode fazer upgrade para um plano superior ou remover anúncios antigos para adicionar novos."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;