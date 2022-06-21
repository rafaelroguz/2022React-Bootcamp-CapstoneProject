import FeaturedBanners from 'components/FeaturedBanners';
import ProductCategories from 'components/ProductCategories';
import FeaturedProducts from 'components/FeaturedProducts';
import { getCategories } from 'features/categories/categories.actions';
import { getFeaturedBanners } from 'features/featuredBanners/featuredBanners.actions';
import React, { Fragment, useEffect } from 'react';
import { useLatestAPI } from 'hooks/useLatestAPI';
import { useDispatch } from 'react-redux';
import { getProducts } from 'features/products/products.actions';

export const Home = () => {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    dispatch(getFeaturedBanners(apiRef, controller));
    dispatch(getCategories(apiRef, controller));
    dispatch(getProducts({ apiRef, controller }));

    return () => {
      controller.abort();
    };
  }, [apiRef, dispatch, isApiMetadataLoading]);

  return (
    <Fragment>
      <FeaturedBanners />
      <ProductCategories />
      <FeaturedProducts />
    </Fragment>
  );
};

export default Home;
