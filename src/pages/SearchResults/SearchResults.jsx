import FeaturedItem from 'components/FeaturedItem';
import LoadingContainer from 'components/LoadingContainer';
import Pagination from 'components/Pagination';
import { getCategories } from 'features/categories/categories.actions';
import {
  selectCategories,
  selectIsLoadingCategories,
} from 'features/categories/categories.selectors';
import { getProducts } from 'features/products/products.actions';
import {
  selectIsLoadingProducts,
  selectProducts,
  selectProductsPaginationData,
} from 'features/products/products.selectors';
import { setProducts } from 'features/products/products.slice';
import { useLatestAPI } from 'hooks/useLatestAPI';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Content, ContentGrid, Title } from './SearchResults.styled';

const pageSize = 20;

const SearchResults = () => {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { search } = useLocation();
  const categoriesList = useSelector(selectCategories);
  const foundProducts = useSelector(selectProducts);
  const isLoadingCategories = useSelector(selectIsLoadingCategories);
  const isLoadingProducts = useSelector(selectIsLoadingProducts);
  const { totalResultsSize } = useSelector(selectProductsPaginationData);
  const [currentPage, setCurrentPage] = useState(1);

  const isLoading = isLoadingCategories || isLoadingProducts;
  const searchParams = new URLSearchParams(search);
  const searchParam = searchParams.get('q');

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    if (!categoriesList.length) {
      dispatch(getCategories(apiRef, controller));
    }

    dispatch(
      getProducts({
        apiRef,
        controller,
        pageNumber: currentPage,
        pageSize,
        searchTerm: searchParam,
      })
    );

    return () => {
      controller.abort();
      dispatch(setProducts([]));
    };
  }, [
    apiRef,
    categoriesList,
    currentPage,
    dispatch,
    isApiMetadataLoading,
    searchParam,
  ]);

  const mappedItems = useMemo(() => {
    return foundProducts.map((product) => {
      const { data, id } = product;
      const {
        category: { id: categoryId },
        short_description,
        mainimage: { alt, url },
        name,
        price,
      } = data;

      const categoryName =
        categoriesList.find((category) => category.id === categoryId)?.data
          .name ?? 'No Category';

      return {
        categoryName,
        description: short_description ?? '',
        id,
        image: { alt, url },
        name,
        price,
      };
    });
  }, [categoriesList, foundProducts]);

  const handleChangePage = (newPage) => setCurrentPage(newPage);

  const handleClickAddToCartButton = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <LoadingContainer isLoading={isLoading}>
      {!foundProducts.length && !isLoadingProducts && (
        <Title>No products found</Title>
      )}
      {!!foundProducts.length && !isLoadingProducts && (
        <Content>
          {!!mappedItems.length && (
            <Pagination
              currentPage={currentPage}
              totalCount={totalResultsSize}
              pageSize={pageSize}
              onPageChange={handleChangePage}
            />
          )}
          <ContentGrid>
            {mappedItems.map((item) => (
              <FeaturedItem
                itemData={item}
                key={item.id}
                onClickButton={handleClickAddToCartButton}
              />
            ))}
          </ContentGrid>
          {!!mappedItems.length && (
            <Pagination
              currentPage={currentPage}
              totalCount={totalResultsSize}
              pageSize={pageSize}
              onPageChange={handleChangePage}
            />
          )}
        </Content>
      )}
    </LoadingContainer>
  );
};

export default SearchResults;
