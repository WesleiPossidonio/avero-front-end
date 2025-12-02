/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from "react";
import api from "../Services/api";

export interface GetProductProps {
  id: number,
  nome: string,
  codigo: string,
  preco: number,
  precoCusto: number,
  estoque: {
    saldoVirtualTotal: number
  },
  tipo: string,
  situacao: string,
  formato: string,
  descricaoCurta: string,
  imagemURL: string,
}

export interface addProductToCartProps extends GetProductProps {
  quantity: number
}
interface ProductContextType {
  listProducts: GetProductProps[]
  listProductToCart: addProductToCartProps[]
  listProductToQuote: addProductToCartProps[]
  setListProductToCart: Dispatch<SetStateAction<addProductToCartProps[]>>
  setListProductToQuote: Dispatch<SetStateAction<addProductToCartProps[]>>
}

interface ProductsContextProviderProps {
  children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export const ProductContextProvider = ({ children }: ProductsContextProviderProps) => {

  const [listProducts, setListProducts] = useState<GetProductProps[]>([])
  const [listProductToCart, setListProductToCart] = useState<addProductToCartProps[]>([])
  const [listProductToQuote, setListProductToQuote] = useState<addProductToCartProps[]>([])


  const getListProducts = async () => {
    try {
      const response = await api.get('produtos')

      const { data } = response
      setListProducts(data.data)
    } catch (error) {
      console.log('error ao buscar a lista na api', error)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getListProducts()
  }, [])

  return (
    <ProductContext.Provider value={{
      listProducts,
      listProductToCart,
      listProductToQuote,
      setListProductToCart,
      setListProductToQuote
    }}
    >{children}
    </ProductContext.Provider>
  )
}