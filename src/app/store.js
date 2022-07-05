import { configureStore } from '@reduxjs/toolkit';
import cartSlice from 'features/cart/cart.slice';
import categoriesReducer from 'features/categories/categories.slice';
import featuredBannersReducer from 'features/featuredBanners/featuredBanners.slice';
import productsReducer from 'features/products/products.slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    categories: categoriesReducer,
    featuredBanners: featuredBannersReducer,
    products: productsReducer,
  },
});
