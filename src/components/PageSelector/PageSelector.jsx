import Layout from "components/Layout";
import useLocation from "hooks/useLocation";
import Home from "pages/Home";
import Products from "pages/Products";
import React from "react";
import { ROUTES } from "utils/routes";

const PageSelector = () => {
  const { location } = useLocation();

  const getCurrentRoute = (route) => {
    switch (route) {
      case ROUTES.PRODUCTS:
        return <Products />;
      case ROUTES.HOME:
      default:
        return <Home />;
    }
  };

  return <Layout>{getCurrentRoute(location)}</Layout>;
};

export default PageSelector;
