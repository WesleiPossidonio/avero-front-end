import { Heart } from "lucide-react";

export const SimilarProducts = () => {
  return (
    <section className="w-full bg-neutral-50 py-16 md:py-24">
      <div className="max-w-[90%] mx-auto px-4">

        <h2 className="text-3xl md:text-3xl text-start mb-7">
          Produtos parecidos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-start text-start">
              <div className="w-full h-68 bg-gray-200 rounded relative">
                <Heart className="absolute top-2.5 right-3 hover:fill-orange-800 cursor-pointer" />
              </div>

              <h1 className="mt-4 text-lg font-medium">
                Lorem ipsum dolor
              </h1>

              <p className="text-neutral-600 font-semibold">
                R$ 190,00
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
