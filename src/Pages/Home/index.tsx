import { CallAction } from "../../components"
import {
  BestSelling,
  Brands,
  Category,
  Hero,
  ProductCategory,
  StoreMap
} from "./Components"

export const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <ProductCategory />
      <BestSelling />
      <Brands />
      <StoreMap />
      <CallAction />
    </>
  )
}


