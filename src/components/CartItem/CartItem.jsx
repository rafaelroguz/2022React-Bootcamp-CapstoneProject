import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ROUTES } from 'utils/routes';
import {
  Button,
  ButtonsContainer,
  ColumnContainer,
  Container,
  FlexContainer,
  Input,
  Label,
  Link,
  LinkContainer,
  PriceLabel,
  RemoveButton,
} from './CartItem.styled';

const CartItem = ({
  isSmallDevice,
  itemData,
  onChangeQuantity,
  onClickRemove,
}) => {
  const { id, image, name, price, quantity: initialQuantity, stock } = itemData;
  const { alt, url } = image;
  const [quantity, setQuantity] = useState(initialQuantity);

  const disableEdit = initialQuantity === quantity || isNaN(quantity);
  const productUrl = `${ROUTES.PRODUCT}/${id}`;

  const handleChangeQuantity = ({ target: { value } }) => {
    const inputQuantity = parseInt(value, 10);

    if (inputQuantity > stock) {
      setQuantity(stock);
      return;
    }

    setQuantity(inputQuantity);
  };

  const handleClickEdit = () => {
    if (quantity === 0) {
      onClickRemove(id);
      return;
    }

    onChangeQuantity(id, quantity);
  };

  const handleClickRemove = () => {
    onClickRemove(id);
  };

  return (
    <Container $isSmallDevice={isSmallDevice}>
      <LinkContainer $isSmallDevice={isSmallDevice}>
        <Link $isSmallDevice={isSmallDevice} to={productUrl}>
          <img alt={alt || name} src={url} />
        </Link>
      </LinkContainer>
      <ColumnContainer $isSmallDevice={isSmallDevice}>
        <Link to={productUrl}>
          <h3>{name}</h3>
        </Link>
        <PriceLabel>{`$${price}`}</PriceLabel>
        <FlexContainer $isSmallDevice={isSmallDevice}>
          <Label>Qty:</Label>
          <Input
            disabled={!stock}
            max={stock}
            min={1}
            type='number'
            value={quantity}
            onChange={handleChangeQuantity}
          />
          <Label>{`Subtotal: $${
            isNaN(quantity) ? '0' : price * quantity
          }`}</Label>
        </FlexContainer>
      </ColumnContainer>
      <ButtonsContainer $isSmallDevice={isSmallDevice}>
        <Button disabled={disableEdit} onClick={handleClickEdit}>
          Update Qty
        </Button>
        <RemoveButton onClick={handleClickRemove}>Remove</RemoveButton>
      </ButtonsContainer>
    </Container>
  );
};

CartItem.propTypes = {
  isSmallDevice: PropTypes.bool,
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
    subtotal: PropTypes.number.isRequired,
  }),
  onChangeQuantity: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default CartItem;
