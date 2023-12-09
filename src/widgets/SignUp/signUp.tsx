import { FC, } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextInput } from '@/shared/ui/TextInput/textInput'
import { Button } from '@/shared/ui/Button/Button'
import { RadioButtons } from '@/shared/ui/RadioButtons/radioButtons'
import { FormComponent } from '@/shared/ui/FormComponent/formComponent'
import { signUpValidationScheme } from './validations'
import { useAuth } from '@/app/context/auth/context'
import { FormData } from '@/shared/ui/FormComponent/types'
import { SignUpFormData } from './types'
import Icon from '@/shared/assets/at.svg'

export const SignUp: FC = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleToggle = () => {
    navigate('/auth/login')
  }

  const handleSubmit = (data: FormData) => {
    const errors = auth?.signUp(data as unknown as SignUpFormData)
    if (errors) {
      return errors
    }
    navigate('/')
  }

  return <div style={{ width: 310 }}>
    <h1 style={{ margin: '10px 0', fontSize: 25 }}>Registration</h1>
    <FormComponent onSubmit={handleSubmit} validationScheme={signUpValidationScheme} clear={true}>
      <TextInput label='Name' name='name' asterisk />
      <TextInput label='Nickname' name='nickname' asterisk icon={Icon} />
      <TextInput label='Email' type='email' name='email' asterisk />
      <RadioButtons items={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]}
                    name='gender' label='Gender' />
      <TextInput label='Password' type='password' name='password' asterisk />
      <TextInput label='Repeat password' type='password' name='repeatPassword' asterisk />
      <Button type='submit' text='Register' style={{ margin: '10px 0' }} />
    </FormComponent>
    <p style={{ margin: '10px 0' }}>
      Already have an account? {' '}
      <span style={{ cursor: 'pointer', color: 'darkblue' }} onClick={handleToggle}>Login</span>
    </p>
  </div>
}