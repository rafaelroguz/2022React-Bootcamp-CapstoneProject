import {
  setCategory,
  setData,
  setIsLoading,
  setPaginationData,
} from './categories.slice';
import { API_BASE_URL, basePaginationData } from 'utils/constants';

export const getCategories = (apiRef, controller) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "category")]]'
      )}&lang=en-us&pageSize=30`,
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

export const getCategory =
  ({ apiRef, controller, categoryId }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          `[[at(document.id, "${categoryId}")]]`
        )}&lang=en-us`,
        {
          signal: controller.signal,
        }
      );
      const data = await response.json();
      const { results } = data;

      dispatch(setCategory(results[0]));
    } catch (err) {
      dispatch(setCategory(undefined));
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
