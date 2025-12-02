
import { Minus, Plus, Trash2 } from "lucide-react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { useProduct } from "../../../../hooks/useProduct";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";

export const SectionCart = () => {
  const { listProductToCart } = useProduct();
  const [cupon, setCupon] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);

  const navigate = useNavigate()

  const priceTotal = listProductToCart.reduce((acc, product) =>
    acc + product.preco * product.quantity, 0);

  const handleSelectCupon = () => {
    if (cupon === "Avero20") {
      const newPrice = priceTotal * 0.8; // 20% de descontso
      setDiscountedPrice(newPrice);
      console.log("Preço com desconto:", newPrice);
    }
  }


  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-5">
      <h2 className="text-xl font-semibold mb-6">Seu Carrinho</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LISTA DE PRODUTOS */}
        <div className="col-span-2 border rounded-xl">

          {listProductToCart.map((item, index) => (
            <div key={item.id}>

              <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 px-4 md:px-6 py-8">

                <div className="flex items-center gap-5">
                  <img
                    src={item.imagemURL}
                    className="w-24 h-24 bg-neutral-300 rounded"
                  />

                  {/* INFO */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.nome}</h3>
                    <p className="text-xs text-gray-500">Tamanho: atualizar bling</p>
                    <p className="text-xs text-gray-500">Cor: tualizar bling</p>
                    <p className="text-sm font-semibold mt-1">
                      R$ {item.preco}
                    </p>
                  </div>
                </div>

                <div className="flex items-center self-end md:flex-col md:items-end gap-5">
                  <button className="text-red-500 order-2 md:order-1">
                    <Trash2 size={18} />
                  </button>

                  <div className="w-24 flex items-center justify-center gap-2 border px-3 py-1 bg-gray-200 md:order-2">
                    <button><Minus size={14} /></button>
                    <span className="text-sm">{item.quantity}</span>
                    <button><Plus size={14} /></button>
                  </div>
                </div>
              </div>

              {/* BORDA COM ESPAÇAMENTO */}
              {index !== listProductToCart.length - 1 && (
                <div className="border-b mx-6" />
              )}

            </div>
          ))}

        </div>

        {/* RESUMO DO PEDIDO */}
        <div className="col-span-2 lg:col-span-1 border rounded-xl p-6 h-fit">
          <h3 className="text-lg font-semibold mb-4">Resumo do pedido</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ {priceTotal}</span>
            </div>
            {
              discountedPrice && (
                <div className="flex justify-between text-red-500">
                  <span>Desconto (-20%)</span>
                  <span>-R$ {discountedPrice}</span>
                </div>
              )
            }
            <div className="flex justify-between">
              <span>Frete</span>
              <span>R$ 15,00</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            {
              discountedPrice ? (
                <span>{discountedPrice}</span>
              ) : (
                <span>{priceTotal}</span>
              )
            }

          </div>

          {/* CUPOM */}
          <form className="flex gap-2 mt-6">
            <Input value={cupon} placeholder="Cupom de desconto"
              className="h-9" onChange={(e) => setCupon(e.target.value)} />
            <Button className="h-9 px-4" onClick={() => handleSelectCupon()}>Aplicar</Button>
          </form>

          {/* FINALIZAR */}
          <Button className="w-full mt-6 h-11 text-white
           bg-black hover:bg-neutral-800" onClick={() => navigate('/checkout')}>
            Finalizar compra
          </Button>
        </div>
      </div>
    </section>
  );
}
