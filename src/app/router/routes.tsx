import { PrivateRoute } from '@/features/PrivateRoute/privateRoute'
import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { MainLayout } from '@/app/layouts/MainLayout/mainLayout'
import { HomePage, CharactersPage, CharacterDetailsPage, LocationsPage, LocationDetailsPage, EpisodesPage, EpisodeDetailsPage, AuthPage } from '@/app/router/lazyPages'


export const routes: RouteObject[] = [
  {
    path: '',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'characters',
        element: <CharactersPage />
      },
      {
        path: 'characters/:id',
        element: <CharacterDetailsPage />
      },
      {
        path: 'locations',
        element: <LocationsPage />
      },
      {
        path: 'locations/:id',
        element: <LocationDetailsPage />
      },
      {
        path: 'episodes',
        element: <EpisodesPage />
      },
      {
        path: 'episodes/:id',
        element: <EpisodeDetailsPage />
      },
      {
        path: '*',
        element: <Navigate to='/' replace />
      }
    ]
  },
  {
    path: 'auth',
    element: <Navigate to='/auth/login' />
  },
  {
    path: 'auth/:type',
    element: <AuthPage />
  }
]