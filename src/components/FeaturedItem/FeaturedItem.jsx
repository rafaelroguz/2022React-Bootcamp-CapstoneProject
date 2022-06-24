import Button from 'components/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { ROUTES } from 'utils/routes';
import {
  Card,
  CategoryText,
  Description,
  Link,
  Picture,
  Title,
} from './FeaturedItem.styled';

const FeaturedItem = ({ itemData, onClickButton }) => {
  const { categoryName, description = '', id, image, name, price } = itemData;
  const { alt = '', url } = image;
  const productUrl = `${ROUTES.PRODUCT}/${id}`;

  // TODO: check if is ok to display description here
  return (
    <Card>
      <Link to={productUrl}>
        <Picture alt={alt} src={url} />
      </Link>
      <Link to={productUrl}>
        <Title>{name}</Title>
      </Link>
      <CategoryText>{categoryName}</CategoryText>
      <Description>
        {description.length > 150
          ? `${description.slice(0, 150)}...`
          : description}
      </Description>
      {/* <Description>{description}</Description> */}
      <Button onClick={() => onClickButton(id)}>
        Add to Cart&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${price}
      </Button>
    </Card>
  );
};

FeaturedItem.propTypes = {
  itemData: PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
    description: PropTypes.string,
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
