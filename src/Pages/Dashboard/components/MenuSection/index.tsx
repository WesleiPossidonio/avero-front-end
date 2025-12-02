import { Button } from '../../../../components/ui/button';
import { ShoppingCart, Heart, Truck, Key, User, LogOut } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '../../../../components/ui/carousel';

const menuItems = [
  { icon: ShoppingCart, label: 'Pedidos', links: 'pedidos' },
  { icon: Heart, label: 'Favoritos', links: 'favoritos' },
  { icon: Truck, label: 'Endereço', links: 'endereco' },
  { icon: Key, label: 'Senha', links: 'senha' },
  { icon: User, label: 'Detalhes da conta', links: 'conta' },
  { icon: LogOut, label: 'Sair', links: 'sair' },
];

interface MenuSectionProps {
  setMenuLinks: (data: string) => void
}

const MenuSection = ({ setMenuLinks }: MenuSectionProps) => {
  return (
    <div className="w-sull md:w-64 md:py-2 md:pr-8 md:border-r">
      <nav className="space-y-4 hidden md:block">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start gap-3 px-4 py-3 h-auto font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              asChild
            >
              <div className='cursor-pointer' onClick={() => setMenuLinks(item.links)}>
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
            </Button>
          );
        })}
      </nav>

      <nav className="md:hidden px-4">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <CarouselItem key={index} className="flex-none basis-1/4 flex justify-center">
                  <Button
                    variant="ghost"
                    className="flex f items-center justify-center gap-2 w-full py-4 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    asChild
                  >
                    <div className="cursor-pointer" onClick={() => setMenuLinks(item.links)}>
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  </Button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </nav>
    </div>
  );
};

export default MenuSection;