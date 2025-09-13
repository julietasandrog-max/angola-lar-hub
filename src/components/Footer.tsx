import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Casa<span className="text-accent">Angola</span>
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              A plataforma líder em imóveis em Angola. Conectamos pessoas aos seus lares dos sonhos 
              com transparência, segurança e confiança.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span className="text-white/80">Rua dos Coqueiros, 123, Luanda</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <span className="text-white/80">+244 923 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span className="text-white/80">info@casaangola.ao</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Comprar</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Arrendar</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Vender</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Avaliação Gratuita</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Financiamento</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Centro de Ajuda</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Como Anunciar</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Contactos</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-white/60">
              <div className="text-2xl font-bold text-accent">5.000+</div>
              <div className="text-sm">Imóveis Ativos</div>
            </div>
            <div className="text-white/60">
              <div className="text-2xl font-bold text-accent">2.500+</div>
              <div className="text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="text-white/60">
              <div className="text-2xl font-bold text-accent">5 Anos</div>
              <div className="text-sm">No Mercado</div>
            </div>
            <div className="text-white/60">
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-sm">Taxa de Sucesso</div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-white/60 text-sm text-center md:text-right">
            <p>&copy; 2024 CasaAngola. Todos os direitos reservados.</p>
            <p className="mt-1">Licença IMV nº 123/2024 - Banco Nacional de Angola</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;