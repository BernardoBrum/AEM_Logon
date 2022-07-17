import React from "react";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import { HeaderStyled } from "./header.styled";
import Clock from "../../components/Clock/clock";
import Weather from "../../components/Weather/weather";
import LogoBlack from "../../assets/logopreto.png";

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img id="logo" src={LogoBlack} alt="Compass logo" />
      </div>
      <Clock />
      <Weather />
    </HeaderStyled>
  );
};

export default MapTo("reactapp/components/content/header")(Header);
