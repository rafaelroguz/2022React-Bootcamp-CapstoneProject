import Cart from 'components/Cart';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';
import React, { Fragment } from 'react';
import useGetScreenSize from 'hooks/useGetScreenSize';
import { ButtonsRow, Container, Content, SearchBarRow } from './Header.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

const Header = () => {
  const { isMobile, isTablet } = useGetScreenSize();
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);
  const searchParam = searchParams.get('q');
  const isSmallDevice = isMobile || isTablet;
  const placeholder = searchParam || 'Search any product';

  const handleSearch = (inputValue) => {
    navigate(`${ROUTES.SEARCH}/?q=${inputValue}`);
  };

  return (
    <Container>
      <Content $isSmallDevice={isSmallDevice}>
        {isSmallDevice ? (
          <ButtonsRow>
            <Logo isMobile={isSmallDevice} />
            <Cart isMobile={isSmallDevice} />
          </ButtonsRow>
        ) : (
          <Logo />
        )}
        {isSmallDevice ? (
          <SearchBarRow>
            <SearchBar placeholder={placeholder} onSearch={handleSearch} />
          </SearchBarRow>
        ) : (
          <Fragment>
            <SearchBar placeholder={placeholder} onSearch={handleSearch} />
            <Cart />
          </Fragment>
        )}
      </Content>
    </Container>
  );
};

export default Header;
