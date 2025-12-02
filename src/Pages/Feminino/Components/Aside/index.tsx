import { Accordion } from "@radix-ui/react-accordion"
import { AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"


export const Aside = () => {
  const [price, setPrice] = useState([100, 400]);
  return (
    <aside className="w-[250px] hidden md:flex flex-col gap-6 ">
      <div className="flex items-center gap-1">
        <p>Home</p>
        <p>{'>'}</p>
        <p className="text-black font-semibold">Feminino</p>
      </div>
      <div className="w-full h-full md:flex flex-col gap-6 p-6 border border-neutral-200 ">
        <h3 className="font-semibold text-[15px]">Filtros</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-neutral-600">T-shirts</p>
            <p className="text-neutral-600">{'>'}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-neutral-600">Shorts</p>
            <p className="text-neutral-600">{'>'}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-neutral-600">Shirts</p>
            <p className="text-neutral-600">{'>'}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-neutral-600">Hoodie</p>
            <p className="text-neutral-600">{'>'}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-neutral-600">Jeans</p>
            <p className="text-neutral-600">{'>'}</p>
          </div>
        </div>
        {/* PREÇO */}
        <Accordion type="single" collapsible>

          <AccordionItem value="price">
            <AccordionTrigger className="text-[14px]">Preço</AccordionTrigger>
            <AccordionContent>
              <Slider
                defaultValue={[100, 400]}
                max={500}
                step={10}
                value={price}
                onValueChange={setPrice}
              />
              <div className="flex justify-between text-xs mt-2">
                <span>R${price[0]}</span>
                <span>R${price[1]}</span>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* CORES */}
          <AccordionItem value="colors">
            <AccordionTrigger className="text-[14px]">Cores</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-6 gap-2 mt-2">
                {["#ff6b6b", "#ffd93d", "#4dabf7", "#845ef7", "#a9e34b", "#000"].map(
                  (color, idx) => (
                    <button
                      key={idx}
                      className="w-6 h-6 rounded-full border"
                      style={{ background: color }}
                    />
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* TAMANHO */}
          <AccordionItem value="sizes">
            <AccordionTrigger className="text-[14px]">Tamanho</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {["PP", "P", "M", "G", "GG"].map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    className="h-8 text-xs"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* ESTILO */}
          <AccordionItem value="style">
            <AccordionTrigger className="text-[14px]">Estilo</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-1 mt-2">
                {["Casual", "Formal", "Festa"].map((style) => (
                  <label
                    key={style}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Checkbox />
                    {style}
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button className="mt-4 w-full h-12 rounded-none bg-black">APLICAR FILTROS</Button>
      </div>
    </aside>
  )
}


