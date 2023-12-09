import React, { ChangeEvent, CSSProperties, FC } from 'react'
import { TextInputProps } from './types'

const heightVariants = {
  'xs': 30,
  'sm': 36,
  'md': 42,
  'lg': 50,
  'xl': 60
}

const radiusVariants = {
  'xs': 2,
  'sm': 4,
  'md': 8,
  'lg': 16,
  'xl': 32
}

const _textInput: FC<TextInputProps> = ({
  variant = 'Default',
  size = 'md',
  error = '',
  label = '',
  radius = 'xs',
  asterisk = false,
  description = '',
  placeholder = '',
  type = 'text',
  name,
  onChange,
  onKeyDown,
  value = '',
  icon
}) => {

  const labelStyles: CSSProperties = {
    fontSize: 18
  }

  const descriptionStyles: CSSProperties = {
    color: 'rgb(134, 142, 150)',
    fontSize: 14,
    padding: '5px 0'
  }

  const inputStyles: CSSProperties = {
    height: heightVariants[size],
    borderRadius: radiusVariants[radius],
    border: variant === 'Default' ? '1px solid #ced4da' : 'none',
    backgroundColor: variant === 'Filled' ? 'rgb(241, 243, 245)' : 'inherit',
    outline: variant === 'UnStyled' ? 'none' : 'cadetblue',
    fontSize: 14 + heightVariants[size] / 8,
    padding: '0 5px',
    width: '100%',
    maxWidth: '100%',
    paddingLeft: icon ? heightVariants[size] - 16 : 5
  }

  const iconStyles: CSSProperties = {
    position: 'absolute',
    height: heightVariants[size] - 26,
    width: 'auto',
    top: '50%',
    left: 5,
    transform: 'translateY(-50%)'
  }

  if (error) {
    inputStyles.border = '1px solid red'
    inputStyles.color = 'red !important'
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange({ name: e.target.name, value: e.target.value })
    }
  }

  return (
    <div style={{ margin: '10px 0', width: '100%' }}>
      <label htmlFor={name} style={labelStyles}>{label} {asterisk ? <span style={{ color: 'red' }}>*</span> : ''}</label>
      <p style={descriptionStyles}>{description}</p>
      <div style={{ position: 'relative' }}>
        {icon ? <img src={icon} alt="Input Icon" style={iconStyles} /> : ''}
        <input type={type} name={name} id={name} className='customInput' placeholder={placeholder}
               style={inputStyles} onChange={handleChange} onKeyDown={onKeyDown} value={value} />
      </div>
      {error ? <p style={{ color: 'red', marginTop: 5 }}>{error}</p> : ''}
    </div>
  )
}

export const TextInput = React.memo(_textInput)