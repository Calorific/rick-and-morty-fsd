import { lazy } from 'react'

export const HomePage = lazy(() => import('@/pages/HomePage/homePage').then(m => ({ default: m.HomePage})))
export const CharactersPage = lazy(() => import('@/pages/CharactersPage/charactersPage').then(m => ({ default: m.CharactersPage})))
export const CharacterDetailsPage = lazy(() => import('@/pages/CharacterDetailsPage/characterDetailsPage').then(m => ({ default: m.CharacterDetailsPage})))
export const LocationsPage = lazy(() => import('@/pages/LocationsPage/locationsPage').then(m => ({ default: m.LocationsPage})))
export const LocationDetailsPage = lazy(() => import('@/pages/LocationDetailsPage/locationDetailsPage').then(m => ({ default: m.LocationDetailsPage})))
export const EpisodesPage = lazy(() => import('@/pages/EpisodesPage/episodesPage').then(m => ({ default: m.EpisodesPage})))
export const EpisodeDetailsPage = lazy(() => import('@/pages/EpisodeDetailsPage/episodeDetailsPage').then(m => ({ default: m.EpisodeDetailsPage})))
export const AuthPage = lazy(() => import('@/pages/AuthPage/authPage').then(m => ({ default: m.AuthPage})))
