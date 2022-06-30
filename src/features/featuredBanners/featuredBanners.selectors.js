export const selectFeaturedBanners = (state) => state.featuredBanners.data;
export const selectFeaturedBannersPaginationData = (state) =>
  state.featuredBanners.paginationData;
export const selectIsLoadingFeaturedBanners = (state) =>
  state.featuredBanners.isLoading;
