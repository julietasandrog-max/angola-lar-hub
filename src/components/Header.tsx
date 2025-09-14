import { Search, Menu, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b-2 border-primary/20 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-black text-primary">
              Casa<span className="text-accent drop-shadow-sm">Angola</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              Comprar
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              Arrendar
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              Vender
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-semibold text-lg">
              Contactos
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary/10">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="cta" className="hidden md:flex font-bold text-lg px-6 py-3">
              Anunciar Imóvel
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden">
          <div className="search-bar flex items-center space-x-2 p-4">
            <Search className="h-6 w-6 text-primary" />
            <input
              type="text"
              placeholder="Localização, bairro ou referência..."
              className="flex-1 bg-transparent outline-none text-sm font-semibold"
            />
            <Button size="sm" variant="default" className="font-bold">
              Procurar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;