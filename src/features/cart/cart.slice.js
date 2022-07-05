import { createSlice } from '@reduxjs/toolkit';

export const CART_STORAGE = 'cart';

// Using local storage to simulate saving cart items on DB
// Since reloading cleans Redux state, this works as a workaroung when the users refreshes cart page
const getInitialCart = () => {
  try {
    const localItemsObj = localStorage.getItem(CART_STORAGE);

    if (!localItemsObj) return [];

    const parsedLocalItems = JSON.parse(localItemsObj);

    return !!parsedLocalItems && parsedLocalItems.length
      ? parsedLocalItems
      : [];
  } catch (err) {
    return [];
  }
};

const initialState = {
  isLoading: true,
  products: [],
  productsIds: getInitialCart(),
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const index = state.productsIds.findIndex(
        ({ productId }) => productId === action.payload.productId
      );

      if (index !== -1) {
        const product = state.productsIds[index];
        state.productsIds[index] = {
          ...product,
          quantity: action.payload.quantity,
        };
      } else {
        state.productsIds.push(action.payload);
      }

      localStorage.removeItem(CART_STORAGE);
      localStorage.setItem(CART_STORAGE, JSON.stringify(state.productsIds));
    },
    clearCart: (state, _action) => {
      state.products = [];
      state.productsIds = [];
      localStorage.removeItem(CART_STORAGE);
    },
    removeProductFromCart: (state, action) => {
      state.productsIds = state.productsIds.filter(
        ({ productId }) => productId !== action.payload
      );
      state.products = state.products.filter(({ id }) => id !== action.payload);
      localStorage.removeItem(CART_STORAGE);
      localStorage.setItem(CART_STORAGE, JSON.stringify(state.productsIds));
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsIds: (state, action) => {
      state.productsIds = action.payload;
      localStorage.removeItem(CART_STORAGE);
      localStorage.setItem(CART_STORAGE, JSON.stringify(state.productsIds));
    },
  },
});

export const {
  addProductToCart,
  clearCart,
  removeProductFromCart,
  setIsLoading,
  setProducts,
  setProductsIds,
} = productsSlice.actions;

export default productsSlice.reducer;
