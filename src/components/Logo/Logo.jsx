import React from "react";
import { LogoContainer } from "./Logo.styled";
import { MAIN_ROUTE } from "utils/routes";
import { ReactComponent as CapstoneLogoIcon } from "assets/svg/capstonelogo.svg";

const Logo = () => (
  <LogoContainer>
    <a href={MAIN_ROUTE} id="logo">
      <CapstoneLogoIcon />
    </a>
  </LogoContainer>
);

export default Logo;
