import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import { Main } from "./Layout.styled";
import { Fragment } from "react/cjs/react.production.min";

export const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Fragment>
);

export default Layout;
