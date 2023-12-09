import { FC, PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/app/context/auth/context'

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const auth = useAuth()

  if (auth && auth.user === null)
    return <Navigate to='/auth/login' replace state={{ from: location.pathname }} />
  return children
}
