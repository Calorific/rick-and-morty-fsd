import * as yup from 'yup'
import { SignUpFormData } from './types'

export const signUpValidationScheme: yup.ObjectSchema<SignUpFormData> = yup.object().shape({
  repeatPassword: yup.string()
      .required('Passwords should match')
      .oneOf([yup.ref('password')], 'Passwords should match'),
  password: yup.string()
      .required('Password is required')
      .matches(/(?=.*[A-Z])/, 'Password should contain at least one uppercase letter')
      .matches(/(?=.*[0-9])/, 'Password should contain at least one number')
      .min(8, 'Password should be at least 8 symbols')
      .max(25, 'Password should not be longer 25 symbols'),
  gender: yup.string().required('Gender is required'),
  email: yup.string()
      .required('Email is required')
      .matches(/^\S+@\S+\.\S+$/g, 'Email is incorrect')
      .max(50, 'Email should not be longer 50 symbols'),
  nickname: yup.string()
      .required('Nickname is require')
      .max(20, 'Nickname should not be longer 20 symbols'),
  name: yup.string()
      .required('Name is require')
      .max(20, 'Name should not be longer 20 symbols')
})