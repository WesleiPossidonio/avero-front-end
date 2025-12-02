import { Routes, Route } from 'react-router-dom'
import {
  Card,
  Checkout,
  Dashborad,
  FemininoSection,
  Home,
  Login,
  MasculinoSection,
  OrderCompleted,
  OrderFailed,
  ProductPage,
  Register
} from '../Pages'
import { GoogleCallbackHandler } from '../components'
import { PrivateRoutes } from './PrivateRoutes'

export const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/produto/:id' element={<ProductPage />} />
      <Route path='/feminino' element={<FemininoSection />} />
      <Route path='/masculino' element={<MasculinoSection />} />
      <Route path='/registro' element={<Register />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/sucesso' element={<OrderCompleted />} />
      <Route path='/compra-negada' element={<OrderFailed />} />
      <Route path='/carrinho' element={<Card />} />
      <Route path="/auth/success" element={<GoogleCallbackHandler />} />

      <Route path="/dashboard" element={<PrivateRoutes />} >
        <Route index element={<Dashborad />} />
      </Route>
    </Routes>
  )
}