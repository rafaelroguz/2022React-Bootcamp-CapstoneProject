import PropTypes from 'prop-types';
import React from 'react';
import { ROUTES } from 'utils/routes';
import {
  AddToCardButton,
  Card,
  CategoryText,
  Link,
  Picture,
  Title,
} from './FeaturedItem.styled';

const FeaturedItem = ({ itemData, onClickButton }) => {
  const { categoryName, id, image, name, price } = itemData;
  const { alt = '', url } = image;
  const productUrl = `${ROUTES.PRODUCT}/${id}`;

  return (
    <Card>
      <Link to={productUrl}>
        <Picture alt={alt} src={url} />
      </Link>
      <Link to={productUrl}>
        <Title>{name}</Title>
      </Link>
      <CategoryText>{categoryName}</CategoryText>
      <AddToCardButton onClick={() => onClickButton(id)}>
        Add to Cart&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${price}
      </AddToCardButton>
    </Card>
  );
};

FeaturedItem.propTypes = {
  itemData: PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      alt: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onClickButton: PropTypes.func.isRequired,
};

export default FeaturedItem;
