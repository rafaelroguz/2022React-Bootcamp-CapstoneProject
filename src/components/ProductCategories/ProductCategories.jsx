import Carousel from "components/Carousel";
import categoryModel from "models/categoryModel";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { Container, Title } from "./ProductCategories.styled";

const ProductCategories = ({ itemList }) => {
  const categoryList = useMemo(
    () =>
      itemList.map(({ id, data, href }) => {
        const {
          main_image: { alt, url },
          name,
        } = data;
        return {
          alt,
          elementUrl: href,
          id,
          imageUrl: url,
          name,
        };
      }),
    [itemList]
  );

  return (
    <Container>
      <Title>Product Categories</Title>
      <Carousel itemList={categoryList} />
    </Container>
  );
};

ProductCategories.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.shape(categoryModel)).isRequired,
};

export default ProductCategories;
