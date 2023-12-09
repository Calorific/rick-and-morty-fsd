import * as yup from 'yup'
import { SignInFormData } from './types'

export const signInValidationScheme: yup.ObjectSchema<SignInFormData> = yup.object().shape({
  password: yup.string()
      .required('Password is required')
      .matches(/(?=.*[A-Z])/, 'Password should contain at least one uppercase letter')
      .matches(/(?=.*[0-9])/, 'Password should contain at least one number')
      .min(8, 'Password should be at least 8 symbols')
      .max(25, 'Password should not be longer 25 symbols'),
  email: yup.string()
      .required('Email is required')
      .matches(/^\S+@\S+\.\S+$/g, 'Email is incorrect')
      .max(50, 'Email should not be longer 50 symbols'),
})