import { HTMLInputTypeAttribute } from 'react'
import { FormInputElement } from '../FormComponent/types'

type sizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface TextInputProps extends FormInputElement {
  variant?: 'Filled' | 'Default' | 'UnStyled'
  size?: sizeTypes
  radius?: sizeTypes
  label?: string
  asterisk?: boolean
  description?: string
  error?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  name: string
  icon?: string
}