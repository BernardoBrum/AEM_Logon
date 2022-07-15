import React from "react";
import { FooterStyled } from "./footer.styled";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import Button from "../../components/Button/button";
import Counter from "../../components/Counter/counter";

const Footer = ({ text }) => {
  return (
    <FooterStyled>
      <div className="left">
        <p>{text}</p>
      </div>
      <div className="right">
        <span>
          Application
          <br />
          refresh in
        </span>
        <Counter />
      </div>
        <Button />
    </FooterStyled>
  );
};

export default MapTo("reactapp/components/content/footer")(Footer);
