import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router/routes'
import { AuthProvider } from './context/auth/authProvider'
import './reset.css'
import '@fontsource/roboto'

export const App: FC = () => {
  return <AuthProvider>
    {useRoutes(routes)}
  </AuthProvider>
}