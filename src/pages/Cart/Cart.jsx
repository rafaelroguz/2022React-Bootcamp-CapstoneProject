import Button from 'components/Button';
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
  clearCart,
  removeProductFromCart,
  setProducts,
  updateCartProduct,
} from 'features/cart/cart.slice';
import useGetScreenSize from 'hooks/useGetScreenSize';
import { useLatestAPI } from 'hooks/useLatestAPI';
import React, { Fragment, useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatToCurrency } from 'utils/currencyUtils';
import { ROUTES } from 'utils/routes';
import {
  ClearCartButton,
  Container,
  EmptyCartMessage,
  Title,
  TotalContainer,
} from './Cart.styled';

const Cart = () => {
  const dispatch = useDispatch();
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { isMobile, isTablet } = useGetScreenSize();
  const navigate = useNavigate();
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
        subtotal: quantity * price,
      };
    });
  }, [products, productsIds]);

  const total = useMemo(
    () => itemList.reduce((acc, { subtotal }) => acc + subtotal, 0),
    [itemList]
  );

  const handleClickCheckout = () => {
    navigate(ROUTES.CHECKOUT);
  };

  const handleChangeQuantity = (productId, quantity) => {
    toast.success(`Updated product quantity to ${quantity}!`);
    dispatch(updateCartProduct({ productId, quantity }));
  };

  const handleClickClearCart = () => {
    toast.success('Your cart was cleared correctly!');
    dispatch(clearCart());
  };

  const handleClickRemove = (productId) => {
    toast.success('Removed product from cart successfully!');
    dispatch(removeProductFromCart(productId));
  };

  return (
    <LoadingContainer isLoading={isLoadingProducts}>
      {!isLoadingProducts && !products.length && (
        <EmptyCartMessage>
          Looks like you don't have products yet!
        </EmptyCartMessage>
      )}
      {!isLoadingProducts && !!itemList.length && (
        <Fragment>
          <Title>Your Cart</Title>
          <Container>
            {itemList.map((item, index) => (
              <Fragment key={item.id}>
                <CartItem
                  isSmallDevice={isMobile || isTablet}
                  itemData={item}
                  onChangeQuantity={handleChangeQuantity}
                  onClickRemove={handleClickRemove}
                />
                {index !== itemList.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Container>
          <TotalContainer>
            <h2>{`Total: ${formatToCurrency(total)}`}</h2>
            <Button onClick={handleClickCheckout}>Proceed to Checkout</Button>
            <ClearCartButton onClick={handleClickClearCart}>
              Clear Cart
            </ClearCartButton>
          </TotalContainer>
        </Fragment>
      )}
    </LoadingContainer>
  );
};

export default Cart;
