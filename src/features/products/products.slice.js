import { createSlice } from '@reduxjs/toolkit';
import { basePaginationData } from 'utils/constants';

const initialState = {
  isLoading: true,
  paginationData: {
    ...basePaginationData,
  },
  product: undefined,
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPaginationData: (state, action) => {
      state.paginationData = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setIsLoading, setPaginationData, setProduct, setProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
