import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TextInput } from '@/shared/ui/TextInput/textInput'
import { Button } from '@/shared/ui/Button/Button'
import { FormComponent } from '@/shared/ui/FormComponent/formComponent'
import { signInValidationScheme } from './validations'
import { useAuth } from '@/app/context/auth/context'
import { FormData } from '@/shared/ui/FormComponent/types'
import { SignInFormData } from './types'

export const SignIn: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const handleToggle = () => {
    navigate('/auth/register')
  }

  const handleSubmit = (_data: FormData) => {
    const data = _data as unknown as SignInFormData
    const errors = auth?.logIn(data.email, data.password)
    if (errors) {
      return errors
    }

    navigate(location.state?.from || '/')
  }

  return <div  style={{ width: 310 }}>
    <h1 style={{ margin: '10px 0', fontSize: 25 }}>Login</h1>
    <FormComponent onSubmit={handleSubmit} validationScheme={signInValidationScheme} clear={true}>
      <TextInput label='Email' type='email' name='email' asterisk />
      <TextInput label='Password' type='password' name='password' asterisk />
      <Button type='submit' text='Login' style={{ margin: '10px 0' }} />
    </FormComponent>
    <p style={{ margin: '10px 0' }}>
      Don't have an account? {' '}
      <span style={{ cursor: 'pointer', color: 'darkblue' }} onClick={handleToggle}>Register</span>
    </p>
  </div>
}