import {
  getCategories,
  getCategory,
} from 'features/categories/categories.actions';
import toast from 'react-hot-toast';
import { API_BASE_URL, basePaginationData } from 'utils/constants';
import {
  setProduct,
  setProducts,
  setIsLoading,
  setPaginationData,
} from './products.slice';

export const getProductById =
  ({ apiRef, controller, productId }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          `[[at(document.id, "${productId}")]]`
        )}&lang=en-us`,
        {
          signal: controller.signal,
        }
      );
      const data = await response.json();
      const { results } = data;
      const { category } = results[0].data;

      dispatch(getCategory({ apiRef, controller, categoryId: category.id }));
      dispatch(setProduct(results[0]));
    } catch (err) {
      dispatch(setProduct(undefined));
      toast.error(err.message);
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getProducts =
  ({
    apiRef,
    controller,
    fetchFeaturedProducts,
    pageNumber = 1,
    pageSize = 16,
    searchTerm,
    selectedCategories = [],
  }) =>
  async (dispatch, select) => {
    try {
      dispatch(setIsLoading(true));

      const categories = select().categories.data;

      if (!categories?.length) {
        dispatch(getCategories(apiRef, controller));
      }

      const featuredFilterParam = fetchFeaturedProducts
        ? '[at(document.tags, ["Featured"])]'
        : '';
      const parsedCategories = selectedCategories.length
        ? selectedCategories.map((category) => `"${category}"`).join(',')
        : [];
      const searchParam = searchTerm
        ? `&q=${encodeURIComponent(`[[fulltext(document, "${searchTerm}")]]`)}`
        : '';
      const baseParam = '[at(document.type, "product")]';
      const filterParam = parsedCategories.length
        ? `[any(my.product.category, [${parsedCategories}])]`
        : '';
      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          `[${baseParam}${featuredFilterParam}${filterParam}]`
        )}${searchParam}&lang=en-us&pageSize=${pageSize}&page=${pageNumber}`,
        {
          signal: controller.signal,
        }
      );
      const data = await response.json();
      const {
        results,
        page,
        results_per_page: resultsPerPage,
        results_size: resultsSize,
        total_results_size: totalResultsSize,
        total_pages: totalPages,
      } = data;

      dispatch(setProducts(results));
      dispatch(
        setPaginationData({
          page,
          resultsPerPage,
          resultsSize,
          totalResultsSize,
          totalPages,
        })
      );
    } catch (err) {
      dispatch(setProducts([]));
      dispatch(setPaginationData({ ...basePaginationData }));
      toast.error(err.message);
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
