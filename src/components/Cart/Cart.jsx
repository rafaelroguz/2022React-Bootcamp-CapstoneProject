import { ReactComponent as ShopCartIcon } from 'assets/svg/shopCart.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { CartButton, Container, IconContainer, Text } from './Cart.styled';

const Cart = ({ isMobile }) => {
  const navigate = useNavigate();

  const handleClickCartButton = () => navigate(ROUTES.CART);

  return (
    <Container isMobile={isMobile}>
      <CartButton onClick={handleClickCartButton}>
        <IconContainer>
          <ShopCartIcon />
        </IconContainer>
        <Text>My Cart</Text>
      </CartButton>
    </Container>
  );
};

Cart.propTypes = {
  isMobile: PropTypes.bool,
};

export default Cart;
