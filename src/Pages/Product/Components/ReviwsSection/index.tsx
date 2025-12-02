
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface Review {
  id: number;
  name: string;
  time: string;
  rating: number;
  avatar: string;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Emily Rocha",
    time: "1 semana atrás",
    rating: 5,
    avatar: "ER",
    comment: "Lorem ipsum dolor sit amet vitae viverra nam vulputate adipiscing portalib."
  },
  {
    id: 2,
    name: "Daniel Paixão",
    time: "2 meses atrás",
    rating: 4,
    avatar: "DP",
    comment: "Lorem ipsum dolor sit amet vitae viverra nam vulputate adipiscing portaib."
  },
  {
    id: 3,
    name: "Carlos Alberto",
    time: "21 de abril",
    rating: 5,
    avatar: "CA",
    comment: "Lorem ipsum dolor sit amet vitae viverra nam vulputate adipiscing portaib."
  },
];

export function ReviewsSection() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-16 px-5">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Avaliações</h2>
          <div className="flex items-center gap-2 text-gray-700 mt-1">
            <span className="text-3xl font-bold">4.8</span>
            <span className="text-sm text-gray-500">• 54 avaliações</span>
          </div>
        </div>

        <Button className="rounded-none h-12" variant="outline">Escrever um comentário</Button>
      </div>

      <Separator className="my-6" />

      {/* Ordenar */}
      <div className="flex justify-end mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm text-gray-600">
            Ordenar por
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Mais recentes</DropdownMenuItem>
            <DropdownMenuItem>Mais antigos</DropdownMenuItem>
            <DropdownMenuItem>Melhor avaliados</DropdownMenuItem>
            <DropdownMenuItem>Pior avaliados</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Reviews */}
      <div className="flex flex-col gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold">
              {review.avatar}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{review.name}</h3>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-black text-black" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-500">{review.time}</p>

              <p className="text-sm text-gray-700 mt-2 max-w-xl">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      <div className="w-full flex justify-center mt-10">
        <Button variant="outline" className="px-8">
          Carregar mais avaliações
        </Button>
      </div>
    </section>
  );
}
