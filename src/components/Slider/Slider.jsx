import { ReactComponent as LeftChevronIcon } from "assets/svg/leftchevron.svg";
import { ReactComponent as RightChevronIcon } from "assets/svg/rightchevron.svg";
import PropTypes from "prop-types";
import React, { useState } from "react";
import screenSizes from "styles/screenSizes";
import useGetScreenWidth from "utils/hooks/useGetScreenWidth";
import {
  ButtonsContainer,
  Container,
  ControlButton,
  DisplayedImage,
  ImageLink,
} from "./Slider.styled";

const Slider = ({ itemList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = useGetScreenWidth();
  const isMobile = screenWidth <= screenSizes.mobile;
  const {
    alt = "",
    elementUrl = "",
    imageUrl = "",
  } = itemList[currentIndex] || {};

  const handleClickNext = () => {
    const isLastItem = currentIndex + 1 === itemList.length;
    isLastItem ? setCurrentIndex(0) : setCurrentIndex((state) => state + 1);
  };

  const handleClickPrevious = () => {
    const isFirstItem = currentIndex === 0;
    isFirstItem
      ? setCurrentIndex(itemList.length - 1)
      : setCurrentIndex((state) => state - 1);
  };

  if (isMobile) {
    return (
      <Container $isMobile={isMobile}>
        <ImageLink href={elementUrl} $isMobile={isMobile}>
          <DisplayedImage alt={alt} src={imageUrl} />
        </ImageLink>
        <ButtonsContainer>
          <ControlButton onClick={handleClickPrevious}>
            <LeftChevronIcon />
          </ControlButton>
          <ControlButton onClick={handleClickNext}>
            <RightChevronIcon />
          </ControlButton>
        </ButtonsContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ControlButton onClick={handleClickPrevious}>
        <LeftChevronIcon />
      </ControlButton>
      <ImageLink href={elementUrl}>
        <DisplayedImage alt={alt} src={imageUrl} />
      </ImageLink>
      <ControlButton onClick={handleClickNext}>
        <RightChevronIcon />
      </ControlButton>
    </Container>
  );
};

Slider.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      elementUrl: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};

export default Slider;
