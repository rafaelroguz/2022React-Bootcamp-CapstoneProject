import React from "react";

import Layout from "components/Layout";
import featuredBanners from "mocks/en-us/featured-banners.json";
import featuredProducts from "mocks/en-us/featured-products.json";
import productCategories from "mocks/en-us/product-categories.json";
import FeaturedProducts from "components/FeaturedProducts";
import FeaturedBanner from "components/FeaturedBanner";
import ProductCategories from "components/ProductCategories";

export const Home = () => (
  <Layout>
    <FeaturedBanner itemList={featuredBanners.results} />
    <ProductCategories itemList={productCategories.results} />
    <FeaturedProducts itemList={featuredProducts.results} />
  </Layout>
);

export default Home;
