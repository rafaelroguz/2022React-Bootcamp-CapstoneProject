import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ROUTES } from 'utils/routes';
import {
  ColumnContainer,
  Container,
  FlexContainer,
  Input,
  Label,
  Link,
  PriceLabel,
} from './CartItem.styled';

const CartItem = ({ itemData, onChangeQuantity, onClickRemove }) => {
  const { id, image, name, price, quantity, stock } = itemData;
  const { alt, url } = image;
  const [qty, setQty] = useState(quantity);

  const productUrl = `${ROUTES.PRODUCT}/${id}`;

  const handleChangeQuantity = ({ target: { value } }) => {
    const inputQuantity = parseInt(value, 10);

    if (inputQuantity > stock) {
      setQty(stock);
      return;
    }

    setQty(inputQuantity);
  };

  return (
    <Container>
      <Link to={productUrl}>
        <img alt={alt || name} src={url} />
      </Link>
      <ColumnContainer>
        <Link to={productUrl}>
          <h3>{name}</h3>
        </Link>
        <PriceLabel>{`$${price}`}</PriceLabel>
        <FlexContainer>
          <Label>Qty:</Label>
          <Input
            disabled={!stock}
            max={stock}
            min={1}
            type='number'
            value={qty}
            onChange={handleChangeQuantity}
          />
          <Label>{`Subtotal: $${isNaN(qty) ? '0' : price * qty}`}</Label>
        </FlexContainer>
      </ColumnContainer>
    </Container>
  );
};

CartItem.propTypes = {
  itemData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }),
  onChangeQuantity: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default CartItem;
