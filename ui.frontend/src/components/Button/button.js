import React from 'react'
import { ButtonContinue, ButtonLogout, ButtonDiv } from './button.styled'

const Button = () => {
  return (
    <ButtonDiv>
    <ButtonContinue>Continuar<br/>Navegando</ButtonContinue>
    <ButtonLogout>Logout</ButtonLogout>
    </ButtonDiv>
  )
}

export default Button