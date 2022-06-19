import { setData, setIsLoading, setPaginationData } from './products.slice';
import { API_BASE_URL, basePaginationData } from 'utils/constants';

export const getProducts =
  (apiRef, controller, pageSize = 16) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}&lang=en-us&pageSize=${pageSize}`,
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
