import { Button } from "../../components/ui/button"
import ImageBox from "../../assets/BoxConcluted.svg"

export const OrderCompleted = () => {
  return (
    <section className="w-full md:min-h-screen flex flex-col items-center justify-center py-20 ">
      <img src={ImageBox} alt="" />
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-lg font-semibold">Obrigado por comprar</h2>
        <p className="text-sm text-gray-500  text-center">
          Seu pedido foi feito com sucesso e <br />
          agora está sendo processado.
        </p>
      </div>
      <Button size="lg" className="mt-4 rounded-sm">
        IR PARA MINHA CONTA
      </Button>
    </section>
  )
}


