import Button from 'components/Button';
import FeaturedItem from 'components/FeaturedItem';
import LoadingContainer from 'components/LoadingContainer';
import {
  selectCategories,
  selectIsLoadingCategories,
} from 'features/categories/categories.selectors';
import {
  selectIsLoadingProducts,
  selectProducts,
} from 'features/products/products.selectors';
import useGetScreenSize from 'hooks/useGetScreenSize';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import {
  ButtonContainer,
  Container,
  ListContainer,
  Title,
} from './FeaturedProducts.styled';

const FeaturedProducts = () => {
  const { isMobile } = useGetScreenSize();
  const navigate = useNavigate();
  const isLoadingCategories = useSelector(selectIsLoadingCategories);
  const isLoadingProducts = useSelector(selectIsLoadingProducts);
  const categoriesItemsList = useSelector(selectCategories);
  const productsItemsList = useSelector(selectProducts);

  const isLoading = isLoadingCategories || isLoadingProducts;

  const productsList = useMemo(
    () =>
      productsItemsList.map(({ id, data }) => {
        const {
          category: { id: categoryId },
          mainimage,
          name,
          price,
        } = data;
        const categoryName =
          categoriesItemsList.find((category) => category.id === categoryId)
            ?.data.name || 'No Category';

        return {
          categoryName,
          id,
          image: {
            alt: mainimage.alt,
            url: mainimage.url,
          },
          name,
          price,
        };
      }),
    [categoriesItemsList, productsItemsList]
  );

  const handleClickAddToCartButton = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  const handleClickViewAllProductsButton = () => navigate(ROUTES.PRODUCTS);

  return (
    <Container>
      <Title>Featured Products</Title>
      <LoadingContainer isLoading={isLoading}>
        <ListContainer>
          {productsList.map((product) => (
            <FeaturedItem
              itemData={product}
              key={product.id}
              onClickButton={handleClickAddToCartButton}
            />
          ))}
        </ListContainer>
        <ButtonContainer $isMobile={isMobile}>
          <Button onClick={handleClickViewAllProductsButton}>
            View All Products
          </Button>
        </ButtonContainer>
      </LoadingContainer>
    </Container>
  );
};

export default FeaturedProducts;
