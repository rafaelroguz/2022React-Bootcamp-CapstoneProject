import PropTypes from "prop-types";
import React from "react";
import {
  AddToCardButton,
  Card,
  CategoryText,
  Picture,
  Title,
} from "./FeaturedItem.styled";
import { capitalizeString } from "utils/stringUtils";

const FeaturedItem = ({ itemData, onClickButton }) => {
  const { category, id, image, name, price } = itemData;
  const { alt, url } = image;

  return (
    <Card>
      <Picture alt={alt} src={url} />
      <Title>{name}</Title>
      <CategoryText>{capitalizeString(category)}</CategoryText>
      <AddToCardButton onClick={() => onClickButton(id)}>
        Add to Cart&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${price}
      </AddToCardButton>
    </Card>
  );
};

FeaturedItem.propTypes = {
  itemData: PropTypes.shape({
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onClickButton: PropTypes.func.isRequired,
};

export default FeaturedItem;
