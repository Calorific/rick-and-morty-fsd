export interface User {
  name: string
  nickname: string
  email: string
  gender: string
  password: string
}

export interface AuthContextValue {
  user: User | null
  signUp: (user: User) => Partial<User> | undefined
  logIn: (name: string, password: string) =>  Partial<User> | undefined
  logOut: (callback?: () => void) => void
}