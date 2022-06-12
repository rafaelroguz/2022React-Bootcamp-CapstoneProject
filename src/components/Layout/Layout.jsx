import React, { Fragment } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import useGetScreenSize from "hooks/useGetScreenSize";
import { Main } from "./Layout.styled";

const Layout = ({ children }) => {
  const { isMobile, isTablet } = useGetScreenSize();
  return (
    <Fragment>
      <Header />
      <Main $isMobile={isMobile} $isTablet={isTablet}>
        {children}
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
