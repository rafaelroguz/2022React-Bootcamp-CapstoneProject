import {
  setProduct,
  setProducts,
  setIsLoading,
  setPaginationData,
} from './products.slice';
import { API_BASE_URL, basePaginationData } from 'utils/constants';

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

      dispatch(setProduct(results[0]));
    } catch (err) {
      dispatch(setProduct(undefined));
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

// Searching products with search term url
// https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?
// ref={apiRef}&q=[[at(document.type, "product")]]&
// q=[[fulltext(document, "{searchTerm}")]]&lang=en-us&pageSize=20

// TODO: we should be able to pass page number and category filter to the fetch
// instead of just recieving all the items and filtering manually
// Seems like we're able to pass "page" query param, but no idea on how to pass "category" query
// param to recieved a filtered response
export const getProducts =
  ({ apiRef, controller, pageNumber = 1, pageSize = 16, searchTerm }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const searchParam = searchTerm
        ? `&q=${encodeURIComponent(`[[fulltext(document, "${searchTerm}")]]`)}`
        : '';

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
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
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
