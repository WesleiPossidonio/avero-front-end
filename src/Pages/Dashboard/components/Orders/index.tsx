
import { X } from 'lucide-react';
import { Button } from '../../../../components/ui/button'

const pedidos = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    date: "20 de Julho de 2025",
    price: "R$ 170,00",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    date: "20 de Julho de 2025",
    price: "R$ 170,00",
  },
];

export const Orders = () => {
  return (
    <div className="lg:pl-10 w-full max-w-4xl px-5">
      <h2 className="text-xl md:text-sm font-semibold mb-3 mt-5 md:mb-6">Pedidos</h2>

      <div className="flex flex-col gap-6">
        {pedidos.map((p) => (
          <div key={p.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gray-300" />
                <button className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-gray-300 rounded-sm flex items-center justify-center hover:bg-gray-100">
                  <X className="w-3 h-3" />
                </button>
              </div>

              <div className="flex flex-col text-sm">
                <span className="font-medium">{p.title}</span>
                <span className="text-xs text-gray-500">{p.date}</span>
                <span className="font-medium">{p.price}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">Processo</span>

              <Button
                variant="outline"
                className="h-8 px-4 text-xs rounded-none border-gray-300"
              >
                Ver item
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


