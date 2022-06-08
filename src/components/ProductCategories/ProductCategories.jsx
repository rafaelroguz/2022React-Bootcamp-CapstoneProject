import Carousel from "components/Carousel";
import categoryModel from "models/categoryModel";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { Container, Title } from "./ProductCategories.styled";

const ProductCategories = ({ categoryList }) => {
  const itemList = useMemo(
    () =>
      categoryList.map(({ id, data, href }) => {
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
    [categoryList]
  );

  // TODO: console throws an error for missing field in prop, but the value IS there
  // `categoryList[0].data.main_image.isRequired` is marked as required in `ProductCategories`,
  // but its value is `undefined`.
  // console.log(categoryList);
  // console.log(categoryList[0]);

  return (
    <Container>
      <Title>Product Categories</Title>
      <Carousel itemList={itemList} />
    </Container>
  );
};

ProductCategories.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape(categoryModel)).isRequired,
};

export default ProductCategories;
