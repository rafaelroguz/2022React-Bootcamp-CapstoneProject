import Button from 'components/Button';
import LoadingContainer from 'components/LoadingContainer';
import Tag from 'components/Tag';
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
import { setProduct } from 'features/products/products.slice';
import useGetScreenSize from 'hooks/useGetScreenSize';
import { useLatestAPI } from 'hooks/useLatestAPI';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { v4 as uuid } from 'uuid';
import {
  Container,
  Description,
  FlexContainer,
  ImageContainer,
  Input,
  Label,
  Link,
  MainContainer,
  PriceLabel,
  SpecsList,
  TagsContainer,
  Title,
} from './Product.styled';

const Product = () => {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { isMobile, isTablet } = useGetScreenSize();
  const { productId } = useParams();
  const currentCategory = useSelector(selectCategory);
  const currentProduct = useSelector(selectProduct);
  const isLoadingCategories = useSelector(selectIsLoadingCategories);
  const isLoadingProduct = useSelector(selectIsLoadingProducts);
  const [quantity, setQuantity] = useState(1);

  const isLoading = isLoadingCategories || isLoadingProduct;
  const isSmallDevice = isMobile || isTablet;

  const {
    category,
    description = [],
    mainimage = {},
    name = '',
    price = '0.00',
    sku = 0,
    specs = [],
    stock = 0,
  } = currentProduct?.data || {};

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    dispatch(getProduct({ apiRef, controller, productId }));

    return () => {
      controller.abort();
      dispatch(setProduct(undefined));
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

  const handleClickAddToCardButton = () => {
    console.log(`Added ${productId} to cart`);
  };

  return (
    <LoadingContainer isLoading={isLoading}>
      {!!currentCategory && !!currentProduct && !isLoading && (
        <Fragment>
          <Container $isSmallDevice={isSmallDevice}>
            <ImageContainer $isSmallDevice={isSmallDevice}>
              <img alt={mainimage.alt} src={mainimage.url} />
            </ImageContainer>
            <MainContainer $isSmallDevice={isSmallDevice}>
              <Title>{name}</Title>
              <Link
                to={`${ROUTES.PRODUCTS}?category=${currentCategory.slugs[0]}`}
              >
                {`Category: ${currentCategory?.data.name || ''}`}
              </Link>
              <TagsContainer>
                {currentProduct.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </TagsContainer>
              <FlexContainer>
                <Label>{`In stock: ${stock || 'Out of Stock'}`}</Label>
                <Label>{`SKU: ${sku}`}</Label>
              </FlexContainer>
              <FlexContainer>
                <PriceLabel>{`$ ${price}`}</PriceLabel>
                <Description>{description[0]?.text}</Description>
              </FlexContainer>
              <FlexContainer>
                <Label>Qty:</Label>
                <Input
                  disabled={!stock}
                  max={stock}
                  min={1}
                  type='number'
                  value={quantity}
                  onChange={handleChangeQuantity}
                />
                <Label>{`Total: $${price * quantity}`}</Label>
              </FlexContainer>
              <Button disabled={!stock} onClick={handleClickAddToCardButton}>
                Add to Cart
              </Button>
            </MainContainer>
          </Container>
          <Label>Product Specs:</Label>
          <SpecsList>
            {specs.map(({ spec_name, spec_value }) => (
              <li key={uuid()}>
                {spec_name}: {spec_value}
              </li>
            ))}
          </SpecsList>
        </Fragment>
      )}
    </LoadingContainer>
  );
};

export default Product;
