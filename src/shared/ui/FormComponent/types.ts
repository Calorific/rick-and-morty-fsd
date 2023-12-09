import React, { ButtonHTMLAttributes, HTMLInputTypeAttribute } from 'react'
import * as yup from 'yup'

export interface Target {
  name: string
  value: string
}

export type FormData = { [key: string]: string }
export type Errors = { [key: string]: string }

export interface FormProps {
  className?: string
  onSubmit: (data: FormData) => Errors | undefined
  clear?: boolean
  defaultData?: FormData
  validationScheme?: yup.AnyObjectSchema
}

export interface FormButtonElement {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
}

export interface FormInputElement {
  name: string
  onChange?: (target: Target) => void
  type?: HTMLInputTypeAttribute
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  disabled?: boolean
  value?: string
}