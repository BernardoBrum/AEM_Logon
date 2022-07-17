import React from "react";
import { ErrorStyled } from "./error.styled";

const Error = ({ visibility }) => {
  return (
    <ErrorStyled visibility={visibility}>
      Ops, usuário ou senha inválidos. <br /> Tente novamente!
    </ErrorStyled>
  );
};

export default Error;
