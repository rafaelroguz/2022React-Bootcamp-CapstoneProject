import Slider from "components/Slider";
import bannerModel from "models/bannerModel";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { Container, Title } from "./FeaturedBanner.styled";

const FeaturedBanner = ({ itemList }) => {
  const bannerList = useMemo(
    () =>
      itemList.map(({ id, data, href }) => {
        const {
          main_image: { alt, url },
        } = data;
        return {
          alt,
          elementUrl: href,
          id,
          imageUrl: url,
        };
      }),
    [itemList]
  );

  return (
    <Container>
      <Title>Featured Banners</Title>
      <Slider itemList={bannerList} />
    </Container>
  );
};

FeaturedBanner.prototype = {
  itemList: PropTypes.arrayOf(PropTypes.shape(bannerModel)).isRequired,
};

export default FeaturedBanner;
