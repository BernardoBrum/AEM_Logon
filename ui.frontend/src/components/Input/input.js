import React from "react";
import { InputStyled, InputDiv } from "./input.styled";

const Input = ({ type, placeholder, children }) => {
  return (
    <InputDiv>
      <InputStyled type={type} placeholder={placeholder} />
      {children}
    </InputDiv>
  );
};

export default Input;
