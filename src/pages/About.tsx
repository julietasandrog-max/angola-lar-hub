import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Star, Globe, CheckCircle, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Sobre a AngoHomes
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A plataforma imobiliária líder em Angola, conectando pessoas aos seus lares dos sonhos com segurança, transparência e eficiência.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <CardContent className="text-center space-y-4">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Democratizar o acesso ao mercado imobiliário angolano, proporcionando uma plataforma segura, 
                  transparente e eficiente para compra, venda e arrendamento de imóveis.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="text-center space-y-4">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Nossa Visão</h3>
                <p className="text-muted-foreground">
                  Ser a referência no mercado imobiliário angolano, facilitando o sonho da casa própria e 
                  impulsionando o desenvolvimento do setor imobiliário nacional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            Números que impressionam
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "25.000+", label: "Imóveis listados", icon: Users },
              { number: "15.000+", label: "Clientes satisfeitos", icon: Star },
              { number: "500+", label: "Parceiros verificados", icon: CheckCircle },
              { number: "18", label: "Províncias cobertas", icon: Globe }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-black text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Transparência",
                description: "Informações claras e verificadas sobre todos os imóveis e transações.",
                icon: Shield
              },
              {
                title: "Inovação",
                description: "Utilizamos tecnologia de ponta para melhorar a experiência dos nossos usuários.",
                icon: Star
              },
              {
                title: "Confiança",
                description: "Construímos relações duradouras baseadas na honestidade e integridade.",
                icon: Award
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="space-y-4">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            Nossa Equipa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Carlos Silva",
                role: "CEO & Fundador",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Maria Santos",
                role: "Diretora de Operações",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "João Pereira",
                role: "Diretor de Tecnologia",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">
            Pronto para encontrar o seu lar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de angolanos que já encontraram o imóvel perfeito através da AngoHomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Procurar Imóveis
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Anunciar Imóvel
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;