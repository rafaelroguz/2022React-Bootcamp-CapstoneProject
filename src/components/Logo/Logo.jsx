import { ReactComponent as CapstoneLogoIcon } from "assets/svg/capstonelogo.svg";
import useLocation from "hooks/useLocation";
import PropTypes from "prop-types";
import React from "react";
import { ROUTES } from "utils/routes";
import { LogoButton, LogoContainer } from "./Logo.styled";

const Logo = ({ isMobile }) => {
  const { setLocation } = useLocation();

  const handleClickLogo = () => setLocation(ROUTES.HOME);

  return (
    <LogoContainer $isMobile={isMobile}>
      <LogoButton id="logo" onClick={handleClickLogo}>
        <CapstoneLogoIcon />
      </LogoButton>
    </LogoContainer>
  );
};

Logo.propTypes = {
  isMobile: PropTypes.bool,
};

export default Logo;
