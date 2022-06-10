import { ReactComponent as DotIcon } from "assets/svg/dot.svg";
import { ReactComponent as LeftChevronIcon } from "assets/svg/leftchevron.svg";
import { ReactComponent as RightChevronIcon } from "assets/svg/rightchevron.svg";
import CarouselItem from "components/CarouselItem";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import useGetScreenSize from "utils/hooks/useGetScreenSize";
import {
  ButtonsContainer,
  ButtonsContent,
  Container,
  ControlButton,
  IndicatorButton,
  IndicatorsContainer,
  InnerContainer,
} from "./Carousel.styled";

const Carousel = ({ itemList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { isMobile } = useGetScreenSize();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrentIndex((prevIndex) => {
          if (prevIndex + 1 === itemList.length) {
            return 0;
          }
          return prevIndex + 1;
        });
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex, itemList, paused]);

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

  const handleClickIndicator = (newIndex) => setCurrentIndex(newIndex);

  return (
    <Container
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <InnerContainer
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {itemList.map(({ alt, elementUrl, id, name, imageUrl }) => (
          <CarouselItem
            alt={alt}
            categoryName={name}
            categoryUrl={elementUrl}
            imageUrl={imageUrl}
            key={id}
          />
        ))}
      </InnerContainer>
      <ButtonsContainer>
        <ButtonsContent>
          <ControlButton $isMobile={isMobile} onClick={handleClickPrevious}>
            <LeftChevronIcon />
          </ControlButton>
          <IndicatorsContainer>
            {itemList.map((item, index) => (
              <IndicatorButton
                $isActive={currentIndex === index}
                $isMobile={isMobile}
                key={`indicator-${item.id}`}
                onClick={() => handleClickIndicator(index)}
              >
                <DotIcon />
              </IndicatorButton>
            ))}
          </IndicatorsContainer>
          <ControlButton $isMobile={isMobile} onClick={handleClickNext}>
            <RightChevronIcon />
          </ControlButton>
        </ButtonsContent>
      </ButtonsContainer>
    </Container>
  );
};

Carousel.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      elementUrl: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Carousel;
