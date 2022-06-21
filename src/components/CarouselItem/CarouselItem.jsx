import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryName, Container, Image } from './CarouselItem.styled';

const CarouselItem = ({ alt, imageUrl, itemUrl, label }) => (
  <Container>
    <Link to={itemUrl}>
      <Image alt={alt} src={imageUrl} />
    </Link>
    <CategoryName>{label}</CategoryName>
  </Container>
);

CarouselItem.propTypes = {
  alt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  itemUrl: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CarouselItem;
