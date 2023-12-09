import { Character, Episode, Location } from './types'

const fetchCharacterById = async (id: string): Promise<Character | null> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character/' + id)
    const data = await response.json()
    return data.error ? null : data
  } catch (e: unknown) {
    return null
  }
}

const fetchLocationById = async (id: string): Promise<Location | null> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/location/' + id)
    const data = await response.json()
    return data.error ? null : data
  } catch (e: unknown) {
    return null
  }
}

const fetchEpisodeById = async (id: string): Promise<Episode | null> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/episode/' + id)
    const data = await response.json()
    return data.error ? null : data
  } catch (e: unknown) {
    return null
  }
}

export const HttpService = {
  fetchCharacterById,
  fetchLocationById,
  fetchEpisodeById
}