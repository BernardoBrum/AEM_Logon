import React from "react";
import { ContentStyled } from "./content.styled";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import UolBall from "../../assets/uolball.png";

const Content = () => {
  return (
    <ContentStyled>
      <div>
        <img src={UolBall} alt="Uol ball" />
      </div>
    </ContentStyled>
  );
};

export default MapTo("reactapp/components/content/content")(Content);
