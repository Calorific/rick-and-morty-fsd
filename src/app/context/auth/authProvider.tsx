import { FC, PropsWithChildren, useState } from 'react'
import { AuthContextValue, User } from './types'
import { AuthContext } from './context'


const currentStorageUser: { email: string, password: string } = JSON.parse(localStorage.getItem('currentUser') || '{}')
const data = localStorage.getItem('users') || '[]'
const users = JSON.parse(data)
const currentUser = users.find((u: User) => u.email === currentStorageUser.email && u.password === currentStorageUser.password) || null


export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(currentUser)

  const signUp = (user: User) => {
    const data = localStorage.getItem('users') || '[]'
    const users: User[] = JSON.parse(data)
    const isDuplicate = users.some((u: User) => u.email === user.email)
    if (isDuplicate) {
      return { email: 'User exists' }
    }
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('currentUser', JSON.stringify({ email: user.email, password: user.password }))
    setUser(user)
  }

  const logIn = (email: string, password: string): Partial<User> | undefined => {
    const data = localStorage.getItem('users') || '[]'
    const users = JSON.parse(data)
    const storageUser: User = users.find((u: User) => u.email === email)
    if (!storageUser) {
      return { email: 'User does not exist' }
    }

    if (storageUser.password !== password) {
      return { password: 'Wrong password' }
    }

    localStorage.setItem('currentUser', JSON.stringify({ email, password }))

    setUser(storageUser)
  }

  const logOut = (callback?: () => void) => {
    setUser(null)
    localStorage.removeItem('currentUser')
    callback?.()
  }

  const data: AuthContextValue = {
    user,
    signUp,
    logIn,
    logOut
  }

  return <AuthContext.Provider value={data}>
    {children}
  </AuthContext.Provider>
}