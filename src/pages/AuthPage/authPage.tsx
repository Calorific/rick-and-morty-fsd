import { FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { SignIn } from '@/widgets/SignIn/signIn'
import { SignUp } from '@/widgets/SignUp/signUp'

export const AuthPage: FC = () => {
  const { type } = useParams()

  if (type !== 'login' && type !== 'register')
    return <Navigate to='/auth/login' replace />

  return <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div>
      {type === 'login' ? <SignIn /> : ''}
      {type === 'register' ? <SignUp /> : ''}
    </div>
  </div>
}