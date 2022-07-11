import React from "react";
import { TitleStyled, TextStyled } from "./title.styled";

const Title = ({ text1, text2 }) => {
  return (
    <>
      <TitleStyled>{text1}</TitleStyled>
      <TextStyled>{text2}</TextStyled>
    </>
  );
};

export default Title;
