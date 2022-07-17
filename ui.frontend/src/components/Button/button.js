import React from "react";
import { ButtonContinue, ButtonLogout, ButtonDiv } from "./button.styled";

const Button = ({ reset, logout }) => {
  return (
    <ButtonDiv>
      <ButtonContinue onClick={reset}>
        Continuar
        <br />
        Navegando
      </ButtonContinue>
      <ButtonLogout onClick={logout}>Logout</ButtonLogout>
    </ButtonDiv>
  );
};

export default Button;
