import CartItem from 'components/CartItem';
import Divider from 'components/Divider';
import LoadingContainer from 'components/LoadingContainer';
import { getProductByIds } from 'features/cart/cart.actions';
import {
  selectCartProducts,
  selectCartProductsIds,
  selectIsLoadingCart,
} from 'features/cart/cart.selectors';
import {
  addProductToCart,
  removeProductFromCart,
  setProducts,
} from 'features/cart/cart.slice';
import { useLatestAPI } from 'hooks/useLatestAPI';
import React, { Fragment, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, EmptyCartMessage, Title } from './Cart.styled';

const Cart = () => {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const isLoadingProducts = useSelector(selectIsLoadingCart);
  const products = useSelector(selectCartProducts);
  const productsIds = useSelector(selectCartProductsIds);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading || !productsIds) {
      return () => {};
    }

    const controller = new AbortController();

    const ids = productsIds.map((product) => product.productId);

    dispatch(
      getProductByIds({
        apiRef,
        controller,
        productIds: ids,
      })
    );

    return () => {
      controller.abort();
      dispatch(setProducts([]));
    };
  }, [apiRef, dispatch, isApiMetadataLoading, productsIds]);

  console.log(products);

  const itemList = useMemo(() => {
    if (!products.length || !productsIds.length) return [];

    return products.map(({ data, id }) => {
      const {
        mainimage: { alt, url },
        name,
        price,
        stock,
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
        stock,
      };
    });
  }, [products, productsIds]);

  const handleChangeQuantity = (productId, quantity) => {
    dispatch(addProductToCart({ productId, quantity }));
  };

  const handleClickRemove = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <LoadingContainer isLoading={isLoadingProducts}>
      {!isLoadingProducts && products.length ? (
        <Fragment>
          <Title>Your Cart</Title>
          <Container>
            {itemList.map((item, index) => (
              <Fragment key={item.id}>
                <CartItem
                  itemData={item}
                  onChangeQuantity={handleChangeQuantity}
                  onClickRemove={handleClickRemove}
                />
                {index < itemList.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Container>
        </Fragment>
      ) : (
        <EmptyCartMessage>
          Looks like you don't have products yet!
        </EmptyCartMessage>
      )}
    </LoadingContainer>
  );
};

export default Cart;
