import Banner1 from '@/assets/Banner1.jpg'
import Banner2 from '@/assets/Banner2.jpg'
import Banner3 from '@/assets/Banner3.jpg'
import BannerMobile1 from '@/assets/BannerMobile1.jpg'
import BannerMobile2 from '@/assets/BannerMobile2.jpg'
import BannerMobile3 from '@/assets/BannerMobile3.jpg'

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'

const DataHero = [
  {
    id: 1,
    desktop: Banner1,
    mobile: BannerMobile1,
    alt: "Banner 1",
    title: "Eleve Seu Estilo <br /> Ao Máximo",
    text: "Peças selecionadas para quem quer presença, <br /> qualidade e um visual marcante."
  },
  {
    id: 2,
    desktop: Banner2,
    mobile: BannerMobile2,
    alt: "Banner 2",
    title: "O Look Que <br /> Fala Por Você",
    text: "Modelos exclusivos, acabamento impecável e estilo que se <span class='hidden md:inline'>destaca em qualquer lugar.</span>"
  },
  {
    id: 3,
    desktop: Banner3,
    mobile: BannerMobile3,
    alt: "Banner 3",
    title: "Polos Masculinas <br /> com até",
    number: "50",
    percent: "%",
    off: "OFF",
  }
]

export const Hero = () => {
  return (
    <Carousel
      className="w-full md:h-[calc(54rem-6rem)]"
      plugins={[Autoplay({ delay: 3500 })]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {DataHero.map((data) => (
          <CarouselItem
            key={data.id}
            className="relative h-[calc(54rem-6rem)]"
          >
            {/* Fundo / Imagem */}
            <picture className="absolute inset-0 w-full h-full">
              <source media="(max-width: 768px)" srcSet={data.mobile} />
              <img
                src={data.desktop}
                alt={data.alt}
                className="w-full h-[47.875rem] object-cover"
              />
            </picture>

            {/* CONTEÚDO */}
            <div
              className={`relative z-10 h-full flex flex-col items-start px-6 md:px-16
                ${data.id === 2
                  ? 'justify-end pb-16 md:justify-center md:pb-0'
                  : 'justify-start pt-16 md:justify-center md:pt-0'
                }`}
            >

              {data.id === 3 ? (
                <div className='ml-[7%]'>
                  {/* Texto pequeno */}
                  <h2
                    className="font-outfit text-4xl md:text-[3rem] leading-[1.1] tracking-wide text-neutral-200 mb-4"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  />

                  {/* Bloco principal */}
                  <div className="flex items-start gap-3">
                    <span className="font-outfit font-extrabold text-[8rem] md:text-[11rem] leading-[0.9] text-neutral-200">
                      {data.number}
                    </span>
                    <div className="flex flex-col leading-none mt-4">
                      <span className="font-outfit text-4xl font-semibold text-neutral-200">
                        {data.percent}
                      </span>
                      <span className="font-outfit text-5xl font-bold text-neutral-200 mt-1">
                        {data.off}
                      </span>
                    </div>
                  </div>

                  {/* Botão */}
                  <Button className="w-36 h-12 mt-6 rounded-none font-semibold tracking-wide">
                    Confira
                  </Button>
                </div>
              ) : (
                <div className={`ml-[1%]`}>
                  <h1
                    className={`text-4xl lg:text-7xl font-outfit leading-tight ${data.id === 2 ? "text-black" : "text-neutral-200"}`}
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  />

                  <p
                    className={`md:text-lg mt-3 ${data.id === 2 ? "text-black" : "text-neutral-200"}`}
                    dangerouslySetInnerHTML={{ __html: data.text ?? '' }}
                  />

                  <Button className="w-36 h-12 rounded-none mt-6 font-semibold">
                    Confira
                  </Button>
                </div>
              )}

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
