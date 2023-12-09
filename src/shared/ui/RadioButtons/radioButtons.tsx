import React, { ChangeEvent, CSSProperties, FC } from 'react'
import { RadioButtonsProps } from './types'

const _radioButtons: FC<RadioButtonsProps> = ({ items, error = '', label = '', asterisk = false,
                                                   description = '', name, onChange, value }) => {

  const labelStyles: CSSProperties = {
    fontSize: 18
  }

  const descriptionStyles: CSSProperties = {
    color: 'rgb(134, 142, 150)',
    fontSize: 14,
    padding: '5px 0'
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange({ name, value: e.target.value })
    }
  }

  return (
      <div style={{ margin: '10px 0' }}>
        <p style={labelStyles}>{label} {asterisk ? <span style={{ color: 'red' }}>*</span> : ''}</p>
        <p style={descriptionStyles}>{description}</p>
        {items.map(({ value: _value, label: _label}) => (
          <span key={_value}>
            <input type="radio" id={_value} name="Radio" value={_value} checked={value === _value} onChange={handleChange} />
            <label htmlFor={_value}>{_label}</label>
          </span>
        ))}
        {error ? <p style={{ color: 'red', marginTop: 5 }}>{error}</p> : ''}
      </div>
  )
}

export const RadioButtons = React.memo(_radioButtons)