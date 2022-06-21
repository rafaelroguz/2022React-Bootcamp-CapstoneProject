import { createSlice } from '@reduxjs/toolkit';
import { basePaginationData } from 'utils/constants';

const initialState = {
  category: undefined,
  data: [],
  isLoading: true,
  paginationData: {
    ...basePaginationData,
  },
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPaginationData: (state, action) => {
      state.paginationData = action.payload;
    },
  },
});

export const { setCategory, setData, setIsLoading, setPaginationData } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
