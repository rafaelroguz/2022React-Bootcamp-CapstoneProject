import LoadingContainer from 'components/LoadingContainer';
import Slider from 'components/Slider';
import {
  selectFeaturedBanners,
  selectIsLoadingFeaturedBanners,
} from 'features/featuredBanners/featuredBanners.selectors';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Title } from './FeaturedBanners.styled';

const FeaturedBanners = () => {
  const isLoading = useSelector(selectIsLoadingFeaturedBanners);
  const itemList = useSelector(selectFeaturedBanners);

  const bannerList = useMemo(
    () =>
      itemList.map(({ id, data }) => {
        const {
          main_image: { alt, url },
        } = data;
        return {
          alt,
          elementUrl: '#',
          id,
          imageUrl: url,
        };
      }),
    [itemList]
  );

  return (
    <Container>
      <Title>Featured Banners</Title>
      <LoadingContainer isLoading={isLoading}>
        <Slider itemList={bannerList} />
      </LoadingContainer>
    </Container>
  );
};

export default FeaturedBanners;
