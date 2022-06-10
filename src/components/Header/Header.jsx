import Cart from "components/Cart";
import Logo from "components/Logo";
import SearchBar from "components/SearchBar";
import React, { Fragment } from "react";
import useGetScreenSize from "utils/hooks/useGetScreenSize";
import { ButtonsRow, Container, Content, SearchBarRow } from "./Header.styled";

const Header = () => {
  const { isMobile, isTablet } = useGetScreenSize();
  const isSmallDevice = isMobile || isTablet;

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
