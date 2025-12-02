
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema Zod
const checkoutSchema = z.object({
  rua: z.string().min(3, "Informe uma rua válida"),
  cidade: z.string().min(2, "Informe a cidade"),
  estado: z.string().min(2, "Informe o estado"),
  cep: z.string().min(8, "CEP inválido"),
  numero: z.number().min(1, 'Informe o numero')
});

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  function onSubmit(data: z.infer<typeof checkoutSchema>) {
    console.log("Dados enviados:", data);
  }

  return (
    <div className="w-full flex flex-col items-center lg:flex-row gap-12 justify-center py-20">
      {/* Left - Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-[420px] flex flex-col gap-4">
        <h3 className="text-sm font-semibold">Endereço para entrega</h3>

        <div>
          <input className="border p-2 text-sm w-1/3 md:w-1/5" placeholder="CEP" {...register("cep")} />
          {errors.cep && <p className="text-red-500 text-xs">{errors.cep.message}</p>}
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <input className="border p-2 text-sm w-full" placeholder="Cidade" {...register("cidade")} />
            {errors.cidade && <p className="text-red-500 text-xs">{errors.cidade.message}</p>}
          </div>

          <div className="w-full">
            <input className="border p-2 text-sm w-full" placeholder="Estado" {...register("estado")} />
            {errors.estado && <p className="text-red-500 text-xs">{errors.estado.message}</p>}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="w-2/3">
            <input className="border p-2 text-sm w-full" placeholder="Rua" {...register("rua")} />
            {errors.rua && <p className="text-red-500 text-xs">{errors.rua.message}</p>}
          </div>

          <div className="w-1/3">
            <input className="border p-2 text-sm w-full" placeholder="Nª" {...register("numero")} />
            {errors.numero && <p className="text-red-500 text-xs">{errors.numero.message}</p>}
          </div>
        </div>

        <button type="submit" className="bg-black text-white py-2 text-sm w-[150px] mt-2">
          FAZER PEDIDO
        </button>
      </form>

      {/* Divider */}
      <div className="w-[1px] bg-gray-200" />

      {/* Right - Order Summary */}
      <div className="w-[90%] md:w-[420px] flex flex-col gap-4">
        <h3 className="text-sm font-semibold">Seu Pedido</h3>

        {/* Steps */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-gray-400" />
          <div className="w-4 h-4 rounded-full bg-gray-400" />
          <div className="w-4 h-4 rounded-full bg-gray-400" />
          <button className="ml-4 border px-3 py-1 text-xs">Editar Carrinho</button>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>R$ 565,00</span>
          </div>

          <div className="flex justify-between text-red-500">
            <span>Desconto (-20%)</span>
            <span>-R$ 113,00</span>
          </div>

          <div className="flex justify-between">
            <span>Frete</span>
            <span>R$ 15,00</span>
          </div>

          <div className="border-t pt-3 flex justify-between font-semibold">
            <span>Total</span>
            <span>R$ 467,00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
