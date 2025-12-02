import { Button } from "@/components/ui/button"
import ImageBox from "@/assets/BoxFailed.svg"

export const OrderFailed = () => {
  return (
    <section className="w-full md:min-h-screen flex flex-col items-center justify-center py-20">
      <img src={ImageBox} alt="" />
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-lg font-semibold">Ops! Ocorreu um problema</h2>
        <p className="text-sm text-gray-500  text-center">
          Ocorreu um problema ao processar seu pedido. <br />
          Revise os detalhes e tente novamente.
        </p>
      </div>
      <Button size="lg" className="mt-4 rounded-sm">
        REVISAR
      </Button>
    </section>
  )
}


