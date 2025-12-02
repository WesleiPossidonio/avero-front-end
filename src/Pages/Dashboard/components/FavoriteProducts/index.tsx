
import { X } from 'lucide-react'
import { Button } from '../../../../components/ui/button';

const pedidos = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    date: "27 de Janeiro de 2025",
    price: "R$145,00",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    date: "27 de Janeiro de 2025",
    price: "R$145,00",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    date: "27 de Janeiro de 2025",
    price: "R$145,00",
  },
];

export const FavoriteProducts = () => {
  return (
    <div className="px-5 md:pl-10 w-full max-w-4xl">
      <h2 className="text-xl md:text-sm font-semibold mb-3 mt-5 md:mb-6">Favoritos</h2>
      <div className="flex flex-col gap-6">
        {pedidos.map((p) => (
          <div key={p.id} className="flex flex-col lg:flex-row md:items-center md:justify-between border-b pb-4 gap-4">
            {/* Mobile: Imagem + Info lado a lado | Desktop: mesmo layout */}
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gray-300" />
                <button className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-gray-300 rounded-sm flex items-center justify-center hover:bg-gray-100">
                  <X className="w-3 h-3" />
                </button>
              </div>

              <div className=" flex flex-col text-sm flex-1">
                <span className="font-medium">{p.title}</span>
                <span className="text-xs text-gray-500 mb-2">{p.date}</span>

                {/* Mobile: Preço e Botão empilhados aqui */}
                <div className="flex items-center justify-between gap-2 md:gap-42 lg:hidden">
                  <span className="font-medium">{p.price}</span>
                  <Button
                    variant="outline"
                    className="w-38 py-5 px-10 text-sm rounded-none border-gray-900"
                  >
                    Adicionar ao carrinho
                  </Button>
                </div>

                {/* Desktop: Remover Item */}
                <span className="hidden md:inline">Remover Item</span>
              </div>
            </div>

            {/* Desktop apenas: Preço + Botão */}
            <div className="hidden lg:flex lg:items-center gap-4">
              <span className="font-medium">{p.price}</span>
              <Button
                variant="outline"
                className="w-56 h-8 px-4 py-5 text-md rounded-none border-gray-300"
              >
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}