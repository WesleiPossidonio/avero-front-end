import { useState, useRef, useEffect, type FormEvent } from "react";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useProduct } from "../../hooks/useProduct";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { listProductToCart } = useProduct();
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  // Fechar search ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Buscando por:", query);
    // Aqui você pode navegar para página de resultados ou filtrar produtos
  };

  return (
    <header className="w-full bg-[#dee1e1] border-b">
      <div className="max-w-[85%] mx-auto md:px-8 lg:px-16">

        {/* MOBILE */}
        <div className="grid grid-cols-3 items-center py-3 lg:hidden">

          {/* Left (Menu + Search) */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <button className="cursor-pointer">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64 bg-[#dee1e1] p-6">
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  <span onClick={() => navigate('/')} className="hover:opacity-70 cursor-pointer">Novidades</span>
                  <span onClick={() => navigate('/feminino')} className="hover:opacity-70 cursor-pointer">Feminino</span>
                  <span onClick={() => navigate('/masculino')} className="hover:opacity-70 cursor-pointer">Masculino</span>
                  <span onClick={() => navigate('/login')} className="hover:opacity-70 cursor-pointer">Minha Conta</span>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Search Form Mobile */}
            <div ref={searchRef} className="relative flex items-center">

              {/* Campo de busca EXPANDIDO */}
              <form
                onSubmit={handleSearchSubmit}
                className={`
      absolute left-0 top-8 
      bg-[#dee1e1]
      rounded-md shadow-md
      overflow-hidden
      flex items-center
      transition-all duration-300
      ${searchOpen ? "opacity-100 w-56 h-10" : "opacity-0 w-0 h-0"}
    `}
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full h-full px-3 text-sm outline-none border border-gray-300 rounded-l-md z-50"
                />
                <button type="submit" className="h-full px-3 bg-black text-white rounded-r-md text-sm z-50">
                  <Search />
                </button>
              </form>

              {/* Ícone de busca */}
              <Search
                className="w-6 h-6 cursor-pointer"
                onClick={() => setSearchOpen((prev) => !prev)}
              />
            </div>

          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <h1 className="text-xl font-bold tracking-widest">AVERO</h1>
          </div>

          {/* Right (Carrinho) */}
          <div className="flex items-center justify-end gap-1">
            <div className="relative cursor-pointer" onClick={() => navigate('/carrinho')}>
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 text-xs bg-white px-2 py-0.5 rounded-full">
                {listProductToCart.length}
              </span>
            </div>
          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-3 items-center py-4">

          {/* Left Menu */}
          <nav className="flex gap-8 text-sm">
            <span onClick={() => navigate('/')} className="hover:opacity-70 cursor-pointer">Novidades</span>
            <span onClick={() => navigate('/feminino')} className="hover:opacity-70 cursor-pointer">Feminino</span>
            <span onClick={() => navigate('/masculino')} className="hover:opacity-70 cursor-pointer">Masculino</span>
          </nav>

          {/* Center Logo */}
          <div className="flex justify-center lg:ml-14 xl:ml-0">
            <h1 className="text-2xl xl:text-3xl font-bold tracking-widest text-[#0e2a27]">AVERO</h1>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6 justify-end">
            {/* Search Form Desktop */}
            <div ref={searchRef} className="relative flex items-center">
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center transition-all duration-300 overflow-hidden ${searchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                  }`}
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full h-8 px-2 border rounded-l-md outline-none"
                />
                <button
                  type="submit"
                  className="h-8 w-8 flex items-center justify-center bg-black rounded-r-md"
                >
                  <Search className="w-4 h-4 text-white" />
                </button>
              </form>

              {/* Ícone para abrir/fechar a barra de busca */}
              {!searchOpen && (
                <Search
                  className="w-5 h-5 cursor-pointer absolute top-1 right-0"
                  onClick={() => setSearchOpen(true)}
                />
              )}
            </div>


            <User className="w-5 h-5 cursor-pointer" onClick={() => navigate('/login')} />
            <div className="relative cursor-pointer" onClick={() => navigate('/carrinho')}>
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute font-semibold -top-2 -right-3 text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                {listProductToCart.length}
              </span>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
