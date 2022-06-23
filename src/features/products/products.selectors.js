export const selectProduct = (state) => state.products.product;
export const selectProducts = (state) => state.products.products;
export const selectProductsPaginationData = (state) =>
  state.products.paginationData;
export const selectIsLoadingProducts = (state) => state.products.isLoading;
