import React from "react";
import { ContentStyled } from "./content.styled";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import UolBall from "../../assets/uolball.png";
import Text from "../../components/Text/text";

const Content = ({text1, p1, text2, p2, text3, p3, text4, p4}) => {
  return (
    <ContentStyled>
      <div>
        <img src={UolBall} alt="Uol ball" />
      </div>
        <Text text1={text1} p1={p1} text2={text2} p2={p2} text3={text3} p3={p3} text4={text4} p4={p4} />
    </ContentStyled>
  );
};

export default MapTo("reactapp/components/content/content")(Content);
