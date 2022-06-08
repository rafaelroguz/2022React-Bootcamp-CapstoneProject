import PropTypes from "prop-types";
import React from "react";
import { Container, Image } from "./CarouselItem.styled";

const CarouselItem = ({ alt, categoryUrl, imageUrl }) => (
  <Container>
    <a href={categoryUrl}>
      <Image alt={alt} src={imageUrl} />
    </a>
  </Container>
);

CarouselItem.propTypes = {
  alt: PropTypes.string.isRequired,
  categoryUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CarouselItem;
