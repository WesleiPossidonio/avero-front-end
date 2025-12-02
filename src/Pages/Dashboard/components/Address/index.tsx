
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

// Schema Zod
const AddressSchema = z.object({
  rua: z.string().min(3, "Informe uma rua válida"),
  cidade: z.string().min(2, "Informe a cidade"),
  estado: z.string().min(2, "Informe o estado"),
  cep: z.string().min(8, "CEP inválido"),
  numero: z.number().min(1, 'Informe o numero')
});

export const Address = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(AddressSchema),
  });

  function onSubmit(data: z.infer<typeof AddressSchema>) {
    console.log("Dados enviados:", data);
  }

  return (
    <div className="w-full max-w-4xl flex gap-12 justify-center py-5  çg:py-20">
      {/* Left - Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-[85%] flex flex-col gap-4">
        <h3 className="text-sm font-semibold">Endereço para envio</h3>

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
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-52 h-12 bg-black text-white font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
        </Button>
      </form>

    </div>
  );
}
