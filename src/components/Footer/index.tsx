import { ClockIcon, MapPin, Phone } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const Footer = () => {
  return (
    <footer className="w-full h-[30ren] bg-neutral-50 flex items-center justify-center p-6 md:p-12">
      <div className="container grid grid-cols-4 gap-16">

        <div className="space-y-4.5 col-span-4 md:col-span-1">
          <h1 className="text-2xl mb-3">Newsletter</h1>
          <p className="text-sm text-neutral-700">
            Lorem ipsum dolor sit amet vivamus aliquam velit
            sagittis. Lorem ipsum dolor sit amet vivamus
          </p>

          <Input className="w-full rounded-none" type="text" placeholder="E-mail" />
          <Button className="w-full h-10 rounded-none ">Enviar</Button>
        </div>


        <div className=" space-y-4.5 col-span-4 md:col-span-1">
          <h2 className="text-sm font-medium text-neutral-500">SUPORTE</h2>
          <div className="w-full flex flex-col gap-3">
            <a href="#" className="text-md font-medium">FAQ</a>
            <a href="#" className="text-md font-medium">Contato</a>
            <a href="#" className="text-md font-medium">Política de Privacidade</a>
          </div>
        </div>

        <div className=" space-y-4.5 col-span-4 md:col-span-1">
          <h2 className="text-sm font-medium text-neutral-500">COLEÇÕES</h2>
          <div className="w-full flex flex-col gap-3">
            <a href="#" className="text-md font-medium">Todas as coleções</a>
            <a href="#" className="text-md font-medium">Feminino</a>
            <a href="#" className="text-md font-medium">Masculino</a>
          </div>
        </div>

        <div className=" space-y-4.5 col-span-4 md:col-span-1">
          <h2 className="text-sm font-medium text-neutral-500">CONTATO</h2>
          <div className="w-full flex flex-col gap-3">
            <a href="#" className="text-md font-medium flex items-center gap-2">
              <MapPin className="text-neutral-500" />
              <span className="text-sm">support@store.com</span>
            </a>

            <a href="#" className="text-md font-medium flex items-center">
              <Phone className="text-neutral-500 mr-2" />
              <span className="text-sm">+12345678910</span>
            </a>

            <a href="#" className="text-md font-medium flex items-center gap-2">
              <ClockIcon className="text-neutral-500" />
              <span className="text-sm">Segunda - Domingo, 9 am - 9 pm</span>
            </a>
          </div>
        </div>

        <div className="col-span-4 flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl font-bold tracking-widest">
            AVERO
          </h1>

          <div>
            <p className="text-neutral-500 text-sm">
              +
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

