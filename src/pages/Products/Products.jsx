import Button from 'components/Button';
import CategoryFilterCard from 'components/CheckboxWithLabel';
import FeaturedItem from 'components/FeaturedItem';
import LoadingContainer from 'components/LoadingContainer';
import Pagination from 'components/Pagination';
import { addProductToCart } from 'features/cart/cart.slice';
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
import useGetScreenSize from 'hooks/useGetScreenSize';
import { useLatestAPI } from 'hooks/useLatestAPI';
import React, { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Content,
  ContentGrid,
  SideBar,
  Title,
} from './Products.styled';

const pageSize = 12;

const Products = () => {
  const dispatch = useDispatch();
  const { isMobile } = useGetScreenSize();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { search } = useLocation();
  const categoriesList = useSelector(selectCategories);
  const isLoadingCategories = useSelector(selectIsLoadingCategories);
  const isLoadingProducts = useSelector(selectIsLoadingProducts);
  const productsList = useSelector(selectProducts);
  const pagination = useSelector(selectProductsPaginationData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const searchParams = new URLSearchParams(search);
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    dispatch(
      getProducts({
        apiRef,
        controller,
        pageNumber: currentPage,
        pageSize,
        selectedCategories,
      })
    );

    return () => {
      controller.abort();
      dispatch(setProducts([]));
    };
  }, [apiRef, currentPage, dispatch, isApiMetadataLoading, selectedCategories]);

  useEffect(() => {
    if (!categoryParam || !categoriesList.length) return;

    const foundCategory = categoriesList.find(
      ({ slugs = [] }) => slugs[0] === categoryParam
    );

    if (foundCategory) {
      setSelectedCategories([foundCategory.id]);
    }
  }, [categoriesList, categoryParam]);

  const mappedItems = useMemo(
    () =>
      productsList.map((product) => {
        const { data, id } = product;
        const {
          category: { id: categoryId },
          mainimage: { alt, url },
          name,
          price,
        } = data;

        const categoryName =
          categoriesList.find((category) => category.id === categoryId)?.data
            .name ?? 'No Category';

        return {
          categoryName,
          id,
          image: { alt, url },
          name,
          price,
        };
      }),
    [categoriesList, productsList]
  );

  useEffect(() => setCurrentPage(1), [selectedCategories]);

  const mappedCategories = categoriesList.map((item) => {
    const {
      data: { name },
      id,
    } = item;

    return {
      id,
      label: name,
    };
  });

  const handleChangePage = (newPage) => setCurrentPage(newPage);

  const handleClickAddToCartButton = (productId) => {
    toast.success('Product added to cart!');
    dispatch(addProductToCart({ productId, quantity: 1 }));
  };

  const handleClickCategory = (categoryId) =>
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((item) => item !== categoryId);
      }

      return [...prev, categoryId];
    });

  const handleClickClearFilters = () => setSelectedCategories([]);

  return (
    <LoadingContainer isLoading={isLoadingCategories || isLoadingProducts}>
      <Title>All Products</Title>
      <Container $isMobile={isMobile}>
        <SideBar $isMobile={isMobile}>
          {mappedCategories.map(({ id, label }) => (
            <CategoryFilterCard
              id={id}
              isChecked={selectedCategories.includes(id)}
              key={id}
              label={label}
              onClick={handleClickCategory}
            />
          ))}
          <Button onClick={handleClickClearFilters}>Clear Filters</Button>
        </SideBar>
        <Content>
          {!!mappedItems.length && (
            <Pagination
              currentPage={currentPage}
              totalCount={pagination.totalResultsSize}
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
              totalCount={pagination.totalResultsSize}
              pageSize={pageSize}
              onPageChange={handleChangePage}
            />
          )}
        </Content>
      </Container>
    </LoadingContainer>
  );
};

export default Products;
