import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { useProduct } from "../../../../hooks/useProduct";
import type { GetProductProps } from "../../../../Contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { AsideMobile } from "../AsideMobile";


export const HeroProducts = () => {
  const { listProducts } = useProduct();
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const totalPages = Math.ceil(listProducts.length / productsPerPage);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = listProducts.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Função para gerar páginas visíveis
  const getVisiblePages = () => {
    const delta = 2; // quantas páginas antes/depois da atual
    const range = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    // Adiciona "..." quando há saltos
    const pages: (number | string)[] = [];
    let last: number | null = null;

    for (const page of range) {
      if (last !== null && page - (last as number) > 1) {
        pages.push("...");
      }
      pages.push(page);
      last = page as number;
    }

    return pages;
  };

  return (
    <div className="flex-1 mt-10">

      <div className="w-full flex items-center justify-between lg:hidden">
        <div className="flex flex-col items-start justify-between mb-6">
          <h2 className="text-2xl font-semibold">Masculino</h2>
          <div className="flex flex-col items-start lg:gap-2 text-sm">
            <span>
              Mostrando {indexOfFirst + 1}–{Math.min(indexOfLast, listProducts.length)} de {listProducts.length} produtos
            </span>

            <Select>
              <SelectTrigger className="w-[140px] bg-transparent border-none text-sm -ml-3">
                <SelectValue placeholder="Mais populares" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Mais populares</SelectItem>
                <SelectItem value="priceLow">Menor preço</SelectItem>
                <SelectItem value="priceHigh">Maior preço</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <AsideMobile />
      </div>

      <div className="lg:flex items-center justify-between mb-6 hidden">
        <h2 className="text-2xl font-semibold">Masculino</h2>
        <div className="flex flex-col items-start lg:gap-2 text-sm">
          <span>
            Mostrando {indexOfFirst + 1}–{Math.min(indexOfLast, listProducts.length)} de {listProducts.length} produtos
          </span>

          <Select>
            <SelectTrigger className="w-[140px] bg-transparent border-none text-sm">
              <SelectValue placeholder="Mais populares" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Mais populares</SelectItem>
              <SelectItem value="priceLow">Menor preço</SelectItem>
              <SelectItem value="priceHigh">Maior preço</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product: GetProductProps) => (
          <div key={product.id} className="flex flex-col" onClick={() => navigate(`/produto/${product.id}`)}>
            <div className="w-full h-42 md:h-[230px] bg-neutral-300 rounded-md flex items-center justify-center">
              <span className="text-neutral-500">IMG</span>
            </div>
            <span className="mt-3 text-sm">{product.nome}</span>
            <span className="font-medium text-sm">{product.preco}</span>
          </div>
        ))}
      </div>

      {/* PAGINAÇÃO */}
      <div className="w-full flex justify-end mt-10">
        <div className="flex items-center gap-2 text-xs">
          <button onClick={() => handlePageChange(currentPage - 1)} className="px-2 py-1 border rounded">{"<"}</button>

          {getVisiblePages().map((page, idx) =>
            page === "..." ? (
              <span key={idx}>...</span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(Number(page))}
                className={`px-2 py-1 border rounded ${page === currentPage ? "bg-black text-white" : ""}`}
              >
                {page}
              </button>
            )
          )}

          <button onClick={() => handlePageChange(currentPage + 1)} className="px-2 py-1 border rounded">{">"}</button>
        </div>
      </div>
    </div>
  );
};
