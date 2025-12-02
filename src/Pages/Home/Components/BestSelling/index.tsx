import { Heart } from "lucide-react";
import { useProduct } from "../../../../hooks/useProduct";
import { useNavigate } from "react-router-dom";

export const BestSelling = () => {
  const { listProducts } = useProduct()
  const navigate = useNavigate()

  const bestSellingProducts = listProducts.slice(0, 4);

  const handleGoToProductDetails = (productId: number) => {
    navigate(`/produto/${productId}`)
  }
  return (
    <section className="w-full bg-neutral-50 py-16 md:py-24">
      <div className="max-w-[90%] mx-auto md:px-4">

        <h2 className="text-3xl md:text-3xl text-start mb-7">
          Mais vendidos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {bestSellingProducts.map((item) => (
            <div key={item.id} className="flex flex-col items-start text-start" onClick={() => handleGoToProductDetails(item.id)}>
              <div className="w-full h-82 relative rounded overflow-hidden bg-gray-200">
                <img
                  src='#'
                  alt={item.nome}
                  className="w-full h-full object-contain" // <-- Mantém proporção
                />
                <Heart className="absolute top-2.5 right-3 hover:fill-orange-800 cursor-pointer" />
              </div>

              <h1 className="mt-4 text-md md:text-lg font-medium">
                {item.nome}
              </h1>

              <p className="text-neutral-600 font-semibold">
                {`R$ ${item.preco.toFixed(2).replace('.', ',')}`}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
