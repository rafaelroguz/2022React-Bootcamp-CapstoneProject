export const selectCategories = (state) => state.categories.data;
export const selectCategoriesPaginationData = (state) =>
  state.categories.paginationData;
export const selectIsLoadingCategories = (state) => state.categories.isLoading;
