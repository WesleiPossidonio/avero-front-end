import { Carousel, CarouselContent, CarouselItem } from "../../../../components/ui/carousel";

import ImageColcci from '../../../../assets/Colcci.svg'
import ImageFórum from '../../../../assets/Fórum.svg'
import ImageLacoste from '../../../../assets/Lacoste.svg'
import ImageLança from '../../../../assets/Lança Perfume.svg'
import ImageOsklen from '../../../../assets/Osklen.svg'
import ImageReserva from '../../../../assets/Reserva.svg'
import ImageSchutz from '../../../../assets/Schutz.svg'

import Autoplay from "embla-carousel-autoplay";

const items = [
  { id: 1, name: "Colcci", image: ImageColcci },
  { id: 2, name: "Fórum", image: ImageFórum },
  { id: 3, name: "Lacoste", image: ImageLacoste },
  { id: 4, name: "Lança Perfume", image: ImageLança },
  { id: 6, name: "Osklen", image: ImageOsklen },
  { id: 7, name: "Reserva", image: ImageReserva },
  { id: 8, name: "Schutz", image: ImageSchutz },
];
export const Brands = () => {
  return (
    <div className="w-full md:h-28 flex items-center justify-center bg-[#161616] py-4 relative">
      {/* CAROUSEL DE NOMES */}
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2600,
          }),
        ]}
        className="w-screen"
      >
        <CarouselContent className="w-full flex items-center">
          {items.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                className="basis-1/5 flex items-center justify-center"
              >
                <img className="w-32 object-cover" src={item.image} alt={item.name} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>

  )
}


