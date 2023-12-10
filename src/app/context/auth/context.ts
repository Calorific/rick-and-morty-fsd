import { createContext, useContext } from 'react'
import { AuthContextValue } from '@/app/context/auth/types'

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}