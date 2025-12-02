import { Navigate, Outlet } from 'react-router-dom'
import { decodeToken } from '../../utils/DecodeToken'


export const PrivateRoutes = () => {

  const token = localStorage.getItem('Avero:userData1.0')
  const dataUser = decodeToken(token)

  if (!token || dataUser?.role !== 'user') {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
