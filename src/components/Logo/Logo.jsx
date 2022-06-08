import React from "react";
import { LogoContainer } from "./Logo.styled";
import { MAIN_ROUTE } from "utils/routes";
import { ReactComponent as CapstoneLogoIcon } from "assets/svg/capstonelogo.svg";
import PropTypes from "prop-types";

const Logo = ({ isMobile }) => (
  <LogoContainer $isMobile={isMobile}>
    <a href={MAIN_ROUTE} id="logo">
      <CapstoneLogoIcon />
    </a>
  </LogoContainer>
);

Logo.propTypes = {
  isMobile: PropTypes.bool,
};

export default Logo;
