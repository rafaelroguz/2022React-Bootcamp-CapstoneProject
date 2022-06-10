import React, { Fragment } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import { Main } from "./Layout.styled";

export const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Fragment>
);

export default Layout;
