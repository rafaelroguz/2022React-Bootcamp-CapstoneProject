import {
  setData,
  setProduct,
  setIsLoading,
  setPaginationData,
} from './products.slice';
import { API_BASE_URL, basePaginationData } from 'utils/constants';

export const getProduct =
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

// TODO: we should be able to pass page number and category filter to the fetch
// instead of just recieving all the items and filtering manually
// Seems like we're able to pass "page" query param, but no idea on how to pass "category" query
// param to recieved a filtered response
export const getProducts =
  ({ apiRef, controller, pageNumber = 1, pageSize = 16 }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}&lang=en-us&pageSize=${pageSize}&page=${pageNumber}`,
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

      dispatch(setData(results));
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
      dispatch(setData([]));
      dispatch(setPaginationData({ ...basePaginationData }));
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
