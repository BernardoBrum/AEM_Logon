import React from "react";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import { ImageStyled } from "./image.styled";

const Image = () => {
  return (
    <ImageStyled>
      <p>SUA IMAGEM AQUI!</p>
    </ImageStyled>
  );
};

export default MapTo("reactapp/components/content/image")(Image);
