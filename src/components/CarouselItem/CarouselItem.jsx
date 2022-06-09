import PropTypes from "prop-types";
import React from "react";
import { CategoryName, Container, Image } from "./CarouselItem.styled";

const CarouselItem = ({ alt, categoryName, categoryUrl, imageUrl }) => (
  <Container>
    <a href={categoryUrl}>
      <Image alt={alt} src={imageUrl} />
    </a>
    <CategoryName>{categoryName}</CategoryName>
  </Container>
);

CarouselItem.propTypes = {
  alt: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CarouselItem;
