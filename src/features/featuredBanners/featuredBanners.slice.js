import { createSlice } from '@reduxjs/toolkit';
import { basePaginationData } from 'utils/constants';

const initialState = {
  data: [],
  isLoading: true,
  paginationData: {
    ...basePaginationData,
  },
};

export const featuredBannersSlice = createSlice({
  name: 'featuredBanners',
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
  },
});

export const { setData, setIsLoading, setPaginationData } =
  featuredBannersSlice.actions;

export default featuredBannersSlice.reducer;
