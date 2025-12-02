import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

// Mock de produtos
const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: "Lorem ipsum dolor",
  price: "R$ 145,00",
}));

export const HeroProducts = () => {
  return (
    <div className="flex-1 mt-10">
      {/* TOPO */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Feminino</h2>

        <div className="flex items-center gap-2 text-sm">
          <span>Mostrando 1–10 de 100 produtos</span>

          <Select>
            <SelectTrigger className="w-[140px] bg-transparent border-none text-sm">
              <SelectValue placeholder="Mais populares" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Mais populares</SelectItem>
              <SelectItem value="priceLow">Menor preço</SelectItem>
              <SelectItem value="priceHigh">Maior preço</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (
          <div key={product.id} className="flex flex-col">

            <div className="w-full h-[230px] bg-neutral-300 rounded-md flex items-center justify-center">
              <span className="text-neutral-500">IMG</span>
            </div>

            <span className="mt-3 text-sm">{product.name}</span>
            <span className="font-medium text-sm">{product.price}</span>

          </div>
        ))}
      </div>

      {/* PAGINAÇÃO */}
      <div className="w-full flex justify-end mt-10">
        <div className="flex items-center gap-2 text-xs">
          <button className="px-2 py-1 border rounded">{"<"}</button>
          <button className="px-2 py-1 border rounded bg-black text-white">1</button>
          <button className="px-2 py-1 border rounded">2</button>
          <span>...</span>
          <button className="px-2 py-1 border rounded">24</button>
          <button className="px-2 py-1 border rounded">{">"}</button>
        </div>
      </div>

    </div>
  )
}

