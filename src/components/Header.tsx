import { Search, Menu, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Casa<span className="text-accent">Angola</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Comprar
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Arrendar
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Vender
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contactos
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="cta" className="hidden md:flex">
              Anunciar Imóvel
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden">
          <div className="search-bar flex items-center space-x-2 p-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Localização, bairro ou referência..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <Button size="sm" variant="default">
              Procurar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;