
import { CallAction } from '../../components'
import { useProduct } from '../../hooks/useProduct';
import { ReviewsSection, SimilarProducts } from './Components'
import ProductSelected from './Components/ProductSelected'
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { listProducts } = useProduct()
  const { id } = useParams();

  const productSelected = listProducts.find(product => product.id === Number(id))

  return (
    <main>
      {productSelected && <ProductSelected productSelected={productSelected} />}
      <ReviewsSection />
      <SimilarProducts />
      <CallAction />
    </main>
  )
}


