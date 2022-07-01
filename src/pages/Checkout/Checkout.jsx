import LoadingContainer from 'components/LoadingContainer';
import React, { Fragment, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  BackToCartButton,
  ErrorMessage,
  FieldContainer,
  Form,
  FormContent,
  Input,
  Label,
  SummaryContent,
  TextArea,
  Title,
  Total,
} from './Checkout.styled';
import Button from 'components/Button';
import useGetScreenSize from 'hooks/useGetScreenSize';
import { useDispatch, useSelector } from 'react-redux';
import { useLatestAPI } from 'hooks/useLatestAPI';
import {
  selectCartProducts,
  selectCartProductsIds,
  selectIsLoadingCart,
} from 'features/cart/cart.selectors';
import { getProductByIds } from 'features/cart/cart.actions';
import { setProducts } from 'features/cart/cart.slice';
import SummaryItem from 'components/SummaryItem';
import { formatToCurrency } from 'utils/currencyUtils';
import Divider from 'components/Divider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

const COMMENTS_MAX_LENGTH = 250;

const schema = yup
  .object({
    comments: yup
      .string()
      .test(
        'len',
        `Comments must be ${COMMENTS_MAX_LENGTH} characters or less`,
        (val) => val.length < 150
      )
      .optional(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    pc: yup
      .number()
      .integer()
      .test(
        'len',
        'Invalid Postal Code / Zip code',
        (val) => val.toString().length === 5
      )
      .required(),
  })
  .required();

const Checkout = () => {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { isMobile, isTablet } = useGetScreenSize();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const isLoadingProducts = useSelector(selectIsLoadingCart);
  const products = useSelector(selectCartProducts);
  const productsIds = useSelector(selectCartProductsIds);

  const isSmallDevice = isMobile || isTablet;

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading || !productsIds?.length) {
      return () => {};
    }

    const controller = new AbortController();
    const ids = productsIds.map((product) => product.productId);

    dispatch(
      getProductByIds({
        apiRef,
        controller,
        fetchCategories: false,
        productIds: ids,
      })
    );

    return () => {
      controller.abort();
      dispatch(setProducts([]));
    };
  }, [apiRef, dispatch, isApiMetadataLoading, productsIds]);

  const itemList = useMemo(() => {
    if (!products.length || !productsIds.length) return [];

    return products.map(({ data, id }) => {
      const {
        mainimage: { alt, url },
        name,
        price,
      } = data;
      const quantity =
        productsIds.find(({ productId }) => productId === id)?.quantity || 0;

      return {
        id,
        image: {
          alt,
          url,
        },
        name,
        price,
        quantity,
        subtotal: quantity * price,
      };
    });
  }, [products, productsIds]);

  const total = useMemo(
    () =>
      formatToCurrency(
        itemList.reduce((acc, { subtotal }) => acc + subtotal, 0)
      ),
    [itemList]
  );

  const handleClickBackToCart = () => {
    navigate(ROUTES.CART);
  };

  const handleClickSubmit = (_data) => {
    toast.success('Thanks for your purchase!');
  };

  return (
    <LoadingContainer isLoading={isLoadingProducts}>
      <Fragment>
        <Title>Checkout</Title>
        <Form
          $isSmallDevice={isSmallDevice}
          onSubmit={handleSubmit(handleClickSubmit)}
        >
          <FormContent $isSmallDevice={isSmallDevice}>
            <FieldContainer>
              <Label htmlFor='name'>Name</Label>
              <Input {...register('name')} />
              {errors.name && <ErrorMessage>Name is required</ErrorMessage>}
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor='email'>Email</Label>
              <Input {...register('email')} />
              {errors.email && (
                <ErrorMessage>Invalid/missing Email</ErrorMessage>
              )}
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor='pc'>Postal Code / Zip</Label>
              <Input type='number' {...register('pc')} />
              {errors.pc && (
                <ErrorMessage>
                  Invalid/missing Postal Code / Zip code
                </ErrorMessage>
              )}
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor='comments'>Comments</Label>
              <TextArea
                maxLength={COMMENTS_MAX_LENGTH}
                rows={isSmallDevice ? 8 : 4}
                {...register('comments')}
              />
              {errors.comments && (
                <ErrorMessage>{errors.comments.message}</ErrorMessage>
              )}
            </FieldContainer>
          </FormContent>
          <SummaryContent $isSmallDevice={isSmallDevice}>
            {itemList.map((item) => (
              <SummaryItem item={item} key={item.id} />
            ))}
            <Divider />
            <Total>Total: {total}</Total>
            <Button type='submit'>Place Order</Button>
            <BackToCartButton onClick={handleClickBackToCart}>
              Back to Cart
            </BackToCartButton>
          </SummaryContent>
        </Form>
      </Fragment>
    </LoadingContainer>
  );
};

export default Checkout;
