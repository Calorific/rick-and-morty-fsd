import { ButtonHTMLAttributes, CSSProperties, MouseEventHandler } from 'react'
import { FormButtonElement } from '../FormComponent/types'

export interface ButtonProps extends FormButtonElement {
  text?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  style?: CSSProperties
}