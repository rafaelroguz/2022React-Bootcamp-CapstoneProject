import Button from 'components/Button';
import LoadingContainer from 'components/LoadingContainer';
import { getCategory } from 'features/categories/categories.actions';
import {
  selectCategory,
  selectIsLoadingCategories,
} from 'features/categories/categories.selectors';
import { getProduct } from 'features/products/products.actions';
import {
  selectIsLoadingProducts,
  selectProduct,
} from 'features/products/products.selectors';
import { useLatestAPI } from 'hooks/useLatestAPI';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  Input,
  Label,
  MainContainer,
  QuantityContainer,
  Title,
} from './Product.styled';

const Product = () => {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { productId } = useParams();
  const currentCategory = useSelector(selectCategory);
  const currentProduct = useSelector(selectProduct);
  const isLoadingCategories = useSelector(selectIsLoadingCategories);
  const isLoadingProduct = useSelector(selectIsLoadingProducts);
  const [quantity, setQuantity] = useState(1);

  const isLoading = isLoadingCategories || isLoadingProduct;

  const {
    category,
    mainimage = {},
    name = '',
    price = '0.00',
    stock = 0,
  } = currentProduct?.data || {};

  console.log('category');
  console.log(category);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    dispatch(getProduct({ apiRef, controller, productId }));

    return () => {
      controller.abort();
    };
  }, [apiRef, dispatch, isApiMetadataLoading, productId]);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading || !category?.id) {
      return () => {};
    }

    const controller = new AbortController();

    dispatch(getCategory({ apiRef, controller, categoryId: category.id }));

    return () => {
      controller.abort();
    };
  }, [apiRef, category, dispatch, isApiMetadataLoading]);

  console.log('product');
  console.log(useSelector(selectProduct));

  const handleChangeQuantity = ({ target: { value } }) => {
    const inputQuantity = parseInt(value, 10);

    if (!value.length || inputQuantity < 1) {
      setQuantity(1);
      return;
    }

    if (inputQuantity > stock) {
      setQuantity(stock);
      return;
    }

    setQuantity(inputQuantity);
  };

  return (
    <LoadingContainer isLoading={isLoading}>
      {!!currentProduct && !isLoading && (
        <Container>
          <ImageContainer>
            <img alt={mainimage.alt} src={mainimage.url} />
          </ImageContainer>
          <MainContainer>
            <Title>{name}</Title>
            <Label>{currentCategory?.data.name || ''}</Label>
            <Label>{`$ ${price}`}</Label>
            <QuantityContainer>
              <Label>Qty:</Label>
              <Input
                type='number'
                max={stock}
                min={1}
                value={quantity}
                onChange={handleChangeQuantity}
              />
              <Button>Add to Cart</Button>
            </QuantityContainer>
          </MainContainer>
        </Container>
      )}
    </LoadingContainer>
  );
};

export default Product;
