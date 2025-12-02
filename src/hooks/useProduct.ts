
import { useContext } from 'react'
import { ProductContext } from '../Contexts/ProductContext'

export const useProduct = () => {
  const context = useContext(ProductContext)
  return context
}