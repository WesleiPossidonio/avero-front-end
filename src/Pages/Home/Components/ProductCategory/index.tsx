/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

import Img1 from "@/assets/01.jpg";
import Img2 from "@/assets/02.jpg";
import Img3 from "@/assets/03.jpg";
import Img4 from "@/assets/04.jpg";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Item {
  name: string;
  image: string;
}

const items: Item[] = [
  { name: "Calçados", image: Img1 },
  { name: "Bolsas", image: Img2 },
  { name: "Vestidos", image: Img3 },
  { name: "Acessórios", image: Img4 },
];

export function ProductCategory() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    // Atualiza o index quando o slider muda
    const updateIndex = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    // Roda na inicialização
    updateIndex();

    // Listener
    api.on("select", updateIndex);

    return () => {
      api.off("select", updateIndex);
    };
  }, [api]);

  return (
    <section className="w-full bg-neutral-100 p-6 md:p-12">
      <div className="w-full max-w-4xl mx-auto mt-10 flex flex-col items-center relative">
        {/* CARD PRINCIPAL */}
        <div className="w-full md:w-[30rem] h-[38rem] rounded-2xl overflow-hidden relative mb-6 shadow">
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].name}
            className="w-full h-full object-cover transition-all duration-500"
          />

          <button className=" w-44 h-12 md:w-52 md:h-15 absolute bottom-8 left-[20%] md:left-1/4 bg-white text-black px-4 py-2 rounded font-semibold shadow-lg">
            VER MAIS
          </button>
        </div>

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
          setApi={setApi}
          className="w-screen absolute top-[50%]  transform -translate-y-1/2"
        >
          <CarouselContent className="w-full flex items-center">
            {items.map((item, index) => {
              const active = index === currentIndex;

              return (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 flex justify-center "
                >
                  <span
                    className={`
                    text-5xl font-medium transition-all duration-300
                    ${active ? "text-white scale-110" : "text-black"}
                  `}
                  >
                    {item.name}
                  </span>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
