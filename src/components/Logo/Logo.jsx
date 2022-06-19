import { ReactComponent as CapstoneLogoIcon } from 'assets/svg/capstonelogo.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { LogoButton, LogoContainer } from './Logo.styled';

const Logo = ({ isMobile }) => {
  const navigate = useNavigate();
  const handleClickLogo = () => navigate(ROUTES.HOME);

  return (
    <LogoContainer $isMobile={isMobile}>
      <LogoButton id='logo' onClick={handleClickLogo}>
        <CapstoneLogoIcon />
      </LogoButton>
    </LogoContainer>
  );
};

Logo.propTypes = {
  isMobile: PropTypes.bool,
};

export default Logo;
