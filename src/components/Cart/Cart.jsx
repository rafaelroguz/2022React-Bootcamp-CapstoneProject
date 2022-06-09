import { ReactComponent as ShopCartIcon } from "assets/svg/shopCart.svg";
import PropTypes from "prop-types";
import React from "react";
import { CART_ROUTE } from "utils/routes";
import { CartLink, Container, IconContainer, Text } from "./Cart.styled";

const Cart = ({ isMobile }) => (
  <Container isMobile={isMobile}>
    <CartLink href={CART_ROUTE}>
      <IconContainer>
        <ShopCartIcon />
      </IconContainer>
      <Text>My Cart</Text>
    </CartLink>
  </Container>
);

Cart.propTypes = {
  isMobile: PropTypes.bool,
};

export default Cart;
