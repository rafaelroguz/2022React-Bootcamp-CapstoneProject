import { configureStore } from '@reduxjs/toolkit';
import featuredBannersReducer from 'features/featuredBanners/featuredBanners.slice';
import categoriesReducer from 'features/categories/categories.slice';
import productsReducer from 'features/products/products.slice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    featuredBanners: featuredBannersReducer,
    products: productsReducer,
  },
});
