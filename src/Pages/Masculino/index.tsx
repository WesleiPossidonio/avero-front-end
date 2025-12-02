
import { CallAction } from "../../components";
import { Aside, HeroProducts } from "./Components";
import BackgroundImage from "../../assets/Masculino.png";
import { StoreMap } from "../Home/Components";
import MobileImage from '@/assets/MobileFeminino.png'

export const MasculinoSection = () => {
  return (
    <section className="w-full">
      <img className="w-full" src={BackgroundImage} srcSet={MobileImage} alt="" />

      <div className="lg:max-w-[80%] mx-auto min-h-screen flex gap-10 px-6 md:px-12 py-10">
        <Aside />
        <HeroProducts />
      </div>
      <StoreMap />
      <CallAction />
    </section>
  );
};
