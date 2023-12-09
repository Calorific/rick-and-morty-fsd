import { FC } from 'react'
import { ButtonProps } from './types'
import './button.css'

export const Button: FC<ButtonProps> = ({ style = {}, text = '',
                                          type = 'button', onClick,
                                          disabled }) => {
  return <button className="pure-material-button-contained" {...{ type, onClick, disabled, style }}>
    {text}
  </button>
}