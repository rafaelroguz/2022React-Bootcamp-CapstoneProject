import { getCategories } from 'features/categories/categories.actions';
import toast from 'react-hot-toast';
import { API_BASE_URL } from 'utils/constants';
import { setIsLoading, setProducts } from './cart.slice';

export const getProductByIds =
  ({ apiRef, controller, fetchCategories = true }) =>
  async (dispatch, select) => {
    try {
      dispatch(setIsLoading(true));

      const productsIds = select().cart.productsIds;

      if (!productsIds.length) {
        dispatch(setProducts([]));
        return;
      }

      if (fetchCategories) {
        dispatch(getCategories(apiRef, controller));
      }

      const idList = productsIds
        .map(({ productId }) => `"${productId}"`)
        .join(',');
      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          `[[in(document.id, [${idList}])]]`
        )}&lang=en-us`,
        {
          signal: controller.signal,
        }
      );
      const data = await response.json();
      const { results } = data;

      dispatch(setProducts(results));
    } catch (err) {
      dispatch(setProducts([]));
      toast.error(err.message);
      console.error(err);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
