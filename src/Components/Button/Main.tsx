import React, { CSSProperties } from 'react'

import { Button } from 'react-bootstrap'
import { ButtonType } from 'react-bootstrap/Button'

import './Main.scss'

interface ButtonMainTypes {
  id?: string
  className?: string
  style?: CSSProperties
  onClick?: (e: React.MouseEvent<HTMLElement | MouseEvent>) => void
  type?: ButtonType
  value?: number
}
const ButtonMain: React.FC<ButtonMainTypes> = ({
  id,
  className,
  style,
  onClick,
  type,
  children,
  value,
}) => {
  return (
    <>
      <Button
        id={id}
        className={`${className || 'primary'} button-main`}
        style={style}
        onClick={onClick}
        type={type}
        value={value}
      >
        {children}
      </Button>
    </>
  )
}

export default ButtonMain
