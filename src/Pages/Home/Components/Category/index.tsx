
import { useState } from "react";
import Img1 from "../../../../assets/01.jpg";
import Img2 from "../../../../assets/02.jpg";
import Img3 from "../../../../assets/03.jpg";
import Img4 from "../../../../assets/04.jpg";

import MasculinoImg1 from "../../../../assets/Masculino01.jpg";
import MasculinoImg2 from "../../../../assets/Masculino02.jpg";
import MasculinoImg3 from "../../../../assets/Masculino03.jpg";
import MasculinoImg4 from "../../../../assets/Masculino04.jpg";

import ImgAvero from '../../../../assets/Layer 2.svg'

export const Category = () => {
  const [category, setCategory] = useState('Feminino')
  return (
    <section className="relative w-full h-auto bg-neutral-50 overflow-hidden py-16 md:py-24">
      <div className=" flex items-center justify-center gap-5 mb-20">
        <p className="cursor-pointer hover:text-neutral-600" onClick={() => setCategory('Feminino')}>Feminino</p>
        <p className="cursor-pointer hover:text-neutral-600" onClick={() => setCategory('Masculino')}>Masculino</p>
      </div>
      {/* Texto gigante no fundo */}
      <img className="w-full lg:h-[20.5rem] xxl:h-[4 absolute bottom-0" src={ImgAvero} alt="" />

      {
        category === 'Feminino' ? (
          <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <img src={Img1} alt="Modelo 1" className="w-full h-60 md:h-full object-cover rounded-lg -mt-10 shadow" />
            <img src={Img2} alt="Modelo 2" className="w-full h-60 md:h-full object-cover rounded-lg shadow" />
            <img src={Img3} alt="Modelo 3" className="w-full h-60 md:h-full object-cover rounded-lg md:-mt-10 shadow" />
            <img src={Img4} alt="Modelo 4" className="w-full h-60 md:h-full object-cover rounded-lg shadow" />
          </div>
        ) : (
          <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <img src={MasculinoImg1} alt="Modelo 1" className="w-full h-60 md:h-full object-cover rounded-lg -mt-10 shadow" />
            <img src={MasculinoImg2} alt="Modelo 2" className="w-full h-60 md:h-full object-cover rounded-lg shadow" />
            <img src={MasculinoImg3} alt="Modelo 3" className="w-full h-60 md:h-full object-cover rounded-lg -mt-10 shadow" />
            <img src={MasculinoImg4} alt="Modelo 4" className="w-full h-60 md:h-full object-cover rounded-lg shadow" />
          </div>
        )
      }

    </section>
  );
};
