import { createSlice } from '@reduxjs/toolkit';
import { basePaginationData } from 'utils/constants';

const initialState = {
  data: [],
  isLoading: true,
  paginationData: {
    ...basePaginationData,
  },
  product: undefined,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPaginationData: (state, action) => {
      state.paginationData = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setData, setIsLoading, setPaginationData, setProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
