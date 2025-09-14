import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, MessageCircle, Star, Calendar, Plus, Settings, TrendingUp, Home, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-foreground">Meu Painel</h1>
            <p className="text-muted-foreground">Bem-vindo de volta, João Silva</p>
          </div>
          <Button size="lg" className="font-bold">
            <Plus className="h-4 w-4 mr-2" />
            Novo Anúncio
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Anúncios ativos</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visualizações</p>
                  <p className="text-2xl font-bold">2.847</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contactos</p>
                  <p className="text-2xl font-bold">47</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-warning/10 rounded-full">
                  <Star className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avaliação</p>
                  <p className="text-2xl font-bold">4,8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Properties */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Meus Imóveis</CardTitle>
                  <Button variant="outline" size="sm">
                    Ver todos
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((property) => (
                    <div key={property} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img 
                        src={`/src/assets/property-${property}.jpg`}
                        alt="Propriedade"
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">Apartamento T3 em Talatona</h4>
                        <p className="text-sm text-muted-foreground">45.000.000 Kz</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Eye className="h-4 w-4 mr-1" />
                            234 visualizações
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            12 contactos
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Badge variant="secondary">Ativo</Badge>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Nova visualização", property: "Apartamento T3 em Talatona", time: "há 2 horas" },
                    { action: "Novo contacto", property: "Casa T4 em Cacuaco", time: "há 4 horas" },
                    { action: "Avaliação recebida", property: "Vivenda T5 em Luanda Sul", time: "há 1 dia" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 py-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold">{activity.action}</span> em{" "}
                          <span className="text-primary">{activity.property}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Anúncio
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Visitas
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Relatórios
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações
                </Button>
              </CardContent>
            </Card>

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Performance desta semana</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Visualizações</span>
                    <span className="font-semibold">+24%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Contactos</span>
                    <span className="font-semibold">+12%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Plan */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Upgrade para Premium</h3>
                <p className="text-sm opacity-90 mb-4">
                  Destaque os seus anúncios e alcance mais clientes
                </p>
                <Button variant="secondary" className="w-full">
                  Fazer Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;