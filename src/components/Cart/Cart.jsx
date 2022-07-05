import { ReactComponent as ShopCartIcon } from 'assets/svg/shopCart.svg';
import { selectCartProductsIds } from 'features/cart/cart.selectors';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import {
  Bubble,
  CartButton,
  Container,
  IconContainer,
  Text,
} from './Cart.styled';

const Cart = ({ isMobile }) => {
  const navigate = useNavigate();
  const products = useSelector(selectCartProductsIds);
  const totalProducts = !!products
    ? products.reduce((acc, product) => acc + product.quantity, 0)
    : 0;

  const handleClickCartButton = () => navigate(ROUTES.CART);

  return (
    <Container isMobile={isMobile}>
      <CartButton onClick={handleClickCartButton}>
        <IconContainer>
          <ShopCartIcon />
        </IconContainer>
        <Text>My Cart</Text>
        {!!totalProducts && <Bubble>{totalProducts}</Bubble>}
      </CartButton>
    </Container>
  );
};

Cart.propTypes = {
  isMobile: PropTypes.bool,
};

export default Cart;
