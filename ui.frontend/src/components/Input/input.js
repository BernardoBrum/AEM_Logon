import React from "react";
import { InputStyled, InputDiv } from "./input.styled";

const Input = ({ type, placeholder, onChange }) => {
  return (
    <InputDiv>
      <InputStyled
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </InputDiv>
  );
};

export default Input;
