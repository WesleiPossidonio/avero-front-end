
import { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'

export const useUser = () => {
  const context = useContext(UserContext)
  return context
}