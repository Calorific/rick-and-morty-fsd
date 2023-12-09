import { FormInputElement } from '../FormComponent/types'

export interface RadioItem {
  label: string
  value: string
}

export interface RadioButtonsProps extends FormInputElement {
  items: RadioItem[]
  label?: string
  asterisk?: boolean
  description?: string
  error?: string
  name: string
}