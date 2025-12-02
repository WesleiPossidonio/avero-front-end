import { useState } from "react";
import { Minus, Plus, RulerIcon, Star } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Input } from "../../../../components/ui/input";

import Image from "../../../../assets/Image.svg"
import type { GetProductProps } from "../../../../Contexts/ProductContext";
import { useProduct } from "../../../../hooks/useProduct";
import { Carousel, CarouselContent, CarouselItem } from "../../../../components/ui/carousel";
const gallery = [
  "/images/prod1.jpg",
  "/images/prod2.jpg",
  "/images/prod3.jpg",
];

interface ProductSelectedProps {
  productSelected: GetProductProps
}

export default function ProductSelected({ productSelected }: ProductSelectedProps) {
  const [mainImage, setMainImage] = useState(gallery[0]);
  const [quantity, setQuantity] = useState(1);

  const { setListProductToCart } = useProduct()

  const colors = ["#2F2A20", "#3B5249", "#1F2940"];
  const sizes = ["P", "M", "G", "GG"];

  const handleAddProductToCard = (data: GetProductProps) => {
    const productSelected = {
      ...data, quantity: quantity
    }
    setListProductToCart((prevList) => [...prevList, productSelected])
  }

  return (
    <section className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-4">

      {/* LEFT - IMAGES */}
      <div className="md:flex gap-6 hidden">
        {/* Miniaturas */}
        <div className="flex flex-col gap-4">
          {gallery.map((img) => (
            <img
              key={img}
              src={img}
              className={`w-32 h-40 object-cover rounded-lg cursor-pointer border 
                ${mainImage === img ? "border-black" : "border-transparent"}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Imagem Principal */}
        <div className="flex-1">
          <img
            src={mainImage}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <Carousel className="w-full h-[400px]">
          <CarouselContent>
            {gallery.map((img, idx) => (
              <CarouselItem key={idx} className="w-full h-[400px] flex justify-center">
                <img
                  src={img}
                  className="w-full h-[400px] object-cover rounded-lg cursor-pointer border"
                  onClick={() => setMainImage(img)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* RIGHT - INFO */}
      <div className="flex flex-col gap-6">

        <h1 className="text-3xl font-semibold">{productSelected.nome}</h1>

        {/* Stars */}
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-sm text-gray-500">4.5/5</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <p className="text-2xl font-semibold">{productSelected.preco}</p>
          <p className="text-gray-400 line-through">R$300,00</p>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm">
            -40%
          </span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{productSelected.descricaoCurta}</p>

        {/* Colors */}
        <div>
          <p className="text-sm font-medium mb-2">Selecione as cores</p>
          <div className="flex gap-3">
            {colors.map((c) => (
              <button
                key={c}
                style={{ backgroundColor: c }}
                className="w-6 h-6 rounded-full border cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <p className="text-sm font-medium mb-2">Escolha o tamanho</p>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex md:hidden items-center border rounded-lg">
              <button
                className="p-3"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus size={16} />
              </button>
              <span className="px-6">{quantity}</span>
              <button
                className="p-3"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-2 mt-5 md:hidden ">
            <Button className="col-span-1 border border-black bg-transparent text-black px-8 py-6 text-md" onClick={() => handleAddProductToCard(productSelected)}>
              ADICIONAR A SACOLA
            </Button>
            <Button className="col-span-1  px-8 py-6 text-md" onClick={() => handleAddProductToCard(productSelected)}>
              COMPRAR AGORA
            </Button>
          </div>
        </div>

        <div className="md:flex items-center gap-4 mt-4 hidden">
          <div className="flex items-center border rounded-lg">
            <button
              className="p-3"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <Minus size={16} />
            </button>
            <span className="px-6">{quantity}</span>
            <button
              className="p-3"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <Plus size={16} />
            </button>
          </div>

          <Button className="px-8 py-6 text-md" onClick={() => handleAddProductToCard(productSelected)}>
            ADICIONAR AO CARRINHO
          </Button>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-2 md:flex md:items-center md:gap-21 mt-6 md:mt-3">
            <div className="flex items-center gap-1">
              <img className="w-8" src={Image} alt="" />
              <p className="text-sm text-gray-900">
                Tabela de Medidas
              </p>
            </div>

            <div className="flex items-center gap-2">
              <RulerIcon className="size-6" />
              <p className="text-sm text-gray-900">
                Descubra seu tamanho
              </p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="desc" className=" w-full">
            <TabsList className="flex justify-start bg-white ">
              <TabsTrigger className="border-b" value="desc">Descrição</TabsTrigger>
              <TabsTrigger className="border-b" value="prazo">Prazo e entrega</TabsTrigger>
              <TabsTrigger className="border-b" value="comp">Composição</TabsTrigger>
            </TabsList>

            <TabsContent value="desc" className="py-2 text-sm text-gray-600">
              Texto de descrição aqui...
            </TabsContent>

            <TabsContent value="prazo" className="py-2 text-sm text-gray-600">
              <div className="mt-1">
                <p className="text-sm font-medium mb-2">Consulte o prazo de entrega</p>

                <div className="grid grid-cols-7 gap-3">
                  <Input placeholder="Insira seu CEP" className="col-span-3" />
                  <Button className="col-span-2">Calcular</Button>
                  <button className="text-xs mt-2 underline text-gray-500 col-span-2 text-start">
                    Não sei meu CEP
                  </button>
                </div>

              </div>
            </TabsContent>

            <TabsContent value="comp" className="py-2 text-sm text-gray-600">
              Composição do produto...
            </TabsContent>
          </Tabs>
        </div>


      </div>
    </section>
  );
}
