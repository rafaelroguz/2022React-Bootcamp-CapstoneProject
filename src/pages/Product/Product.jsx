import Button from 'components/Button';
import LoadingContainer from 'components/LoadingContainer';
import Slider from 'components/Slider';
import Tag from 'components/Tag';
import { addProductToCart } from 'features/cart/cart.slice';
import {
  selectCategory,
  selectIsLoadingCategories,
} from 'features/categories/categories.selectors';
import { getProductById } from 'features/products/products.actions';
import {
  selectIsLoadingProducts,
  selectProduct,
} from 'features/products/products.selectors';
import { setProduct } from 'features/products/products.slice';
import useGetScreenSize from 'hooks/useGetScreenSize';
import { useLatestAPI } from 'hooks/useLatestAPI';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
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
    description = [],
    images = [],
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

    dispatch(getProductById({ apiRef, controller, productId }));

    return () => {
      controller.abort();
      dispatch(setProduct(undefined));
    };
  }, [apiRef, dispatch, isApiMetadataLoading, productId]);

  const pictures = useMemo(
    () =>
      images.map(({ image: { alt, url } }) => ({
        alt: alt || name,
        id: uuid(),
        imageUrl: url,
      })),
    [images, name]
  );

  const handleChangeQuantity = ({ target: { value } }) => {
    const inputQuantity = parseInt(value, 10);

    if (inputQuantity > stock) {
      setQuantity(stock);
      return;
    }

    setQuantity(inputQuantity);
  };

  // Toast are not a requirement but I wanted to use them in some cases, so I added a library
  // to save development time. If this could have a negative score on the project, let me know
  const handleClickAddToCardButton = () => {
    if (quantity < 1) {
      toast.error('Please select at least one unit.');
      return;
    }

    if (quantity > stock) {
      toast.error(`Only ${stock} units left.`);
      return;
    }

    toast.success('Added product to cart.');
    dispatch(addProductToCart({ productId: currentProduct.id, quantity }));
  };

  return (
    <LoadingContainer isLoading={isLoading}>
      {!!currentCategory && !!currentProduct && !isLoading && (
        <Fragment>
          <Container $isSmallDevice={isSmallDevice}>
            <ImageContainer $isSmallDevice={isSmallDevice}>
              <Slider itemList={pictures} />
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
                <Label>{`Total: $${
                  isNaN(quantity) ? '0' : price * quantity
                }`}</Label>
              </FlexContainer>
              <Button
                disabled={quantity < 1 || isNaN(quantity) || !stock}
                onClick={handleClickAddToCardButton}
              >
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
