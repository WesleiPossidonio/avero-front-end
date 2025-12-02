import { Button } from "../../../../components/ui/button"

import ImageCircle from '../../../../assets/circle.svg'
import ImageLoja from '../../../../assets/Loja.png'

export const StoreMap = () => {
  return (
    <section className="w-full bg-[#37221A]">
      <div className="max-w-[90rem] md:h-[35rem] mx-auto grid grid-cols-1 md:grid-cols-2 h-auto">

        {/* IMAGEM */}
        <div className="w-full md:h-full overflow-hidden flex flex-col mt-2 md:mt-0 md:flex-row justify-center items-center order-2 md:order-1">
          <img
            src={ImageCircle}
            alt="Selo da marca"
            className=" md:hidden z-40 md:mt-[15%] w-32 md:w-40 md:-translate-x-1/2 translate-y-1/2"
          />
          <img
            src={ImageLoja}
            alt="Nossa loja"
            className="w-[629px] h-[22.625rem] md:h-full object-cover"
          />

          <img
            src={ImageCircle}
            alt="Selo da marca"
            className=" hidden md:block z-40 md:mt-[15%] w-32 md:w-40 md:-translate-x-1/2 -translate-y-1/2  md:-translate-y-1/3"
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col justify-center items-start mt-15 px-8 md:px-12 space-y-4 order-1 md:order-2">
          <h1 className="text-3xl md:text-5xl text-white font-semibold">
            Venha nos Visitar!
          </h1>

          <p className="text-white text-sm md:text-md leading-relaxed max-w-md">
            Para quem prefere a compra presencial, confira o nosso endereço e venha nos visitar.
            Estamos localizados no Shopping Plaza Macaé e será um prazer atendê-lo(a) pessoalmente.
          </p>

          <Button
            variant="outline"
            className="font-medium h-12 w-fit px-6 rounded-none mt-4 border-white text-[#37221A] bg-white hover:bg-white/80"
          >
            <a href="https://maps.app.goo.gl/jN4gpK3kgwqLNmU39" target="_blank" rel="noopener noreferrer">
              VER COMO CHEGAR
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
