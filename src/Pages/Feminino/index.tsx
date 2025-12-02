
import { CallAction } from "../../components";
import { Aside, HeroProducts } from "./Components";
import BackgroundImage from "../../assets/feminino.jpg";
import MobileImage from '@/assets/MobileFeminino.png'

export const FemininoSection = () => {
  return (
    <section className="w-full">
      <img className="w-full" src={BackgroundImage} srcSet={MobileImage} alt="" />

      <div className="max-w-[80%] mx-auto min-h-screen flex gap-10 px-6 md:px-12 py-10">
        <Aside />
        <HeroProducts />
      </div>
      <CallAction />
    </section>
  );
};
