import Carousel from 'components/Carousel';
import LoadingContainer from 'components/LoadingContainer';
import {
  selectCategories,
  selectIsLoadingCategories,
} from 'features/categories/categories.selectors';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ROUTES } from 'utils/routes';
import { Container, Title } from './ProductCategories.styled';

const ProductCategories = () => {
  const isLoading = useSelector(selectIsLoadingCategories);
  const itemList = useSelector(selectCategories);

  const categoriesList = useMemo(
    () =>
      itemList.map(({ id, data, slugs }) => {
        const {
          main_image: { alt, url: imageUrl },
          name,
        } = data;
        return {
          alt,
          id,
          imageUrl,
          itemUrl: `${ROUTES.PRODUCTS}?category=${slugs[0] || id}`,
          label: name,
        };
      }),
    [itemList]
  );

  return (
    <Container>
      <Title>Product Categories</Title>
      <LoadingContainer isLoading={isLoading}>
        <Carousel itemList={categoriesList} />
      </LoadingContainer>
    </Container>
  );
};

export default ProductCategories;
