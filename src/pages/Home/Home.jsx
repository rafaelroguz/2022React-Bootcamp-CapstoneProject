import FeaturedBanner from "components/FeaturedBanner";
import ProductCategories from "components/ProductCategories";
import FeaturedProducts from "components/FeaturedProducts";
import featuredBanners from "mocks/en-us/featured-banners.json";
import featuredProducts from "mocks/en-us/featured-products.json";
import productCategories from "mocks/en-us/product-categories.json";
import React, { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <FeaturedBanner itemList={featuredBanners.results} />
    <ProductCategories categoryList={productCategories.results} />
    <FeaturedProducts itemList={featuredProducts.results} />
  </Fragment>
);

export default Home;
