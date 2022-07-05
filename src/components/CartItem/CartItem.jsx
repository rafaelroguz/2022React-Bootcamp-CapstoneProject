import { ReactComponent as TrashIcon } from 'assets/svg/trash.svg';
import QuantityInput from 'components/QuantityInput';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { formatToCurrency } from 'utils/currencyUtils';
import { ROUTES } from 'utils/routes';
import {
  ColumnContainer,
  Container,
  FlexContainer,
  Label,
  Link,
  PriceLabel,
  RemoveButton,
  SubtotalLabel,
} from './CartItem.styled';

const CartItem = ({
  isSmallDevice,
  itemData,
  onChangeQuantity,
  onClickRemove,
}) => {
  const {
    id,
    image,
    name,
    price,
    quantity: initialQuantity,
    stock,
    subtotal,
  } = itemData;
  const { alt, url } = image;

  const productUrl = `${ROUTES.PRODUCT}/${id}`;

  const handleChangeQuantity = (newQuantity) => {
    if (isNaN(newQuantity)) {
      return;
    }

    if (newQuantity === 0) {
      onClickRemove(id);
      return;
    }

    onChangeQuantity(id, newQuantity);
  };

  const handleClickRemove = () => {
    onClickRemove(id);
  };

  return (
    <Container $isSmallDevice={isSmallDevice}>
      <RouterLink to={productUrl}>
        <img alt={alt || name} src={url} />
      </RouterLink>
      <ColumnContainer $isSmallDevice={isSmallDevice}>
        <Link to={productUrl}>
          <h3>{name}</h3>
        </Link>
        <PriceLabel>{formatToCurrency(price)}</PriceLabel>
        <FlexContainer $isSmallDevice={isSmallDevice}>
          <Label>Qty:</Label>
          <QuantityInput
            disabled={!stock}
            initialValue={initialQuantity}
            max={stock}
            min={1}
            onChangeQuantity={handleChangeQuantity}
          />
        </FlexContainer>
        <SubtotalLabel>{`Subtotal: ${formatToCurrency(
          subtotal
        )}`}</SubtotalLabel>
      </ColumnContainer>
      <RemoveButton onClick={handleClickRemove}>
        <TrashIcon />
      </RemoveButton>
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
