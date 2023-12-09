import { createContext, useContext } from 'react'
import { AuthContextValue } from '@/app/context/auth/types.ts'

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}