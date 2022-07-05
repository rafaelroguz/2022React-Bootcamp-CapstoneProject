import PropTypes from 'prop-types';
import React from 'react';
import { formatToCurrency } from 'utils/currencyUtils';
import {
  Container,
  ProductName,
  Image,
  ItemSummaryContainer,
  ItemSummaryText,
  SubContainer,
} from './SummaryItem.styled';

const SummaryItem = ({
  item: {
    name,
    quantity,
    image: { alt, url },
    subtotal,
  },
}) => (
  <Container>
    <Image alt={alt} src={url} />
    <SubContainer>
      <ProductName>{name}</ProductName>
      <ItemSummaryContainer>
        <ItemSummaryText>Qty: {quantity}</ItemSummaryText>
        <ItemSummaryText>
          Subtotal: {formatToCurrency(subtotal)}
        </ItemSummaryText>
      </ItemSummaryContainer>
    </SubContainer>
  </Container>
);

SummaryItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired,
  }).isRequired,
};

export default SummaryItem;
