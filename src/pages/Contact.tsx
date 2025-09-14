import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, HeadphonesIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Entre em Contacto
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Entre em contacto connosco através de qualquer um dos canais abaixo.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black mb-6">Informações de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-muted-foreground">+244 923 456 789</p>
                    <p className="text-muted-foreground">+244 912 345 678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@angohomes.ao</p>
                    <p className="text-muted-foreground">suporte@angohomes.ao</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Endereço</h3>
                    <p className="text-muted-foreground">Rua Rainha Ginga, nº 45</p>
                    <p className="text-muted-foreground">Ingombota, Luanda</p>
                    <p className="text-muted-foreground">Angola</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h - 18h</p>
                    <p className="text-muted-foreground">Sábado: 9h - 14h</p>
                    <p className="text-muted-foreground">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Suporte Rápido</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat ao Vivo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <HeadphonesIcon className="h-4 w-4 mr-2" />
                    Suporte Técnico
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergências: 924 000 000
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envie-nos uma mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Primeiro Nome</Label>
                      <Input id="firstName" placeholder="João" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Último Nome</Label>
                      <Input id="lastName" placeholder="Silva" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="joao@email.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="+244 923 456 789" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o assunto..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Informações Gerais</SelectItem>
                        <SelectItem value="support">Suporte Técnico</SelectItem>
                        <SelectItem value="billing">Faturação</SelectItem>
                        <SelectItem value="property">Dúvidas sobre Imóvel</SelectItem>
                        <SelectItem value="partnership">Parcerias</SelectItem>
                        <SelectItem value="other">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Escreva a sua mensagem aqui..."
                      rows={6}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" className="rounded mt-1" />
                    <Label htmlFor="consent" className="text-sm">
                      Aceito que os meus dados sejam utilizados para responder à minha solicitação, 
                      de acordo com a nossa Política de Privacidade.
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-black text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Como posso anunciar um imóvel?",
                answer: "Crie uma conta, escolha um plano e siga o assistente de criação de anúncios. É simples e rápido!"
              },
              {
                question: "Quanto tempo demora para aprovar um anúncio?",
                answer: "Os anúncios são normalmente aprovados em 24-48 horas após a submissão e verificação."
              },
              {
                question: "Posso editar meu anúncio depois de publicado?",
                answer: "Sim, pode editar as informações do seu anúncio a qualquer momento através do seu painel."
              },
              {
                question: "Como entro em contacto com um anunciante?",
                answer: "Utilize os botões de contacto disponíveis em cada anúncio para ligar ou enviar mensagem."
              },
              {
                question: "Existe alguma taxa para compradores?",
                answer: "Não, o uso da plataforma é completamente gratuito para quem procura imóveis."
              },
              {
                question: "Como posso cancelar minha assinatura?",
                answer: "Pode cancelar a qualquer momento através das configurações da sua conta ou contactando o suporte."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;