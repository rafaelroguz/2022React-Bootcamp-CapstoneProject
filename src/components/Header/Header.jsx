import Cart from "components/Cart";
import Logo from "components/Logo";
import SearchBar from "components/SearchBar";
import React, { Fragment } from "react";
import screenSizes from "styles/screenSizes";
import useGetScreenWidth from "utils/hooks/useGetScreenWidth";

import { ButtonsRow, Container, Content, SearchBarRow } from "./Header.styled";

const Header = () => {
  const screenWidth = useGetScreenWidth();
  const isSmallDevice = screenWidth <= screenSizes.tablet;

  const handleSearch = (inputValue) => {
    // TODO: add search functionality
    console.log(inputValue);
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
            <SearchBar
              placeholder="Search any product"
              onSearch={handleSearch}
            />
          </SearchBarRow>
        ) : (
          <Fragment>
            <SearchBar
              placeholder="Search any product"
              onSearch={handleSearch}
            />
            <Cart />
          </Fragment>
        )}
      </Content>
    </Container>
  );
};

export default Header;
