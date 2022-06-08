import React from "react";
import { CartLink, Container, IconContainer, Text } from "./Cart.styled";
import { CART_ROUTE } from "utils/routes";
import { ReactComponent as ShopCartIcon } from "assets/svg/shopCart.svg";

const Cart = () => (
  <Container>
    <CartLink href={CART_ROUTE}>
      <IconContainer>
        <ShopCartIcon />
      </IconContainer>
      <Text>My Cart</Text>
    </CartLink>
  </Container>
);

export default Cart;
