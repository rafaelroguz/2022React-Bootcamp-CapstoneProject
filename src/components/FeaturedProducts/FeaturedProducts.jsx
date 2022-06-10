import Button from "components/Button";
import FeaturedItem from "components/FeaturedItem";
import React from "react";
import useLocation from "utils/hooks/useLocation";
import useGetScreenSize from "utils/hooks/useGetScreenSize";
import { ROUTES } from "utils/routes";
import {
  ButtonContainer,
  Container,
  ListContainer,
  Title,
} from "./FeaturedProducts.styled";

const FeaturedProducts = ({ itemList }) => {
  const { setLocation } = useLocation();
  const { isMobile } = useGetScreenSize();

  const handleClickButton = () => setLocation(ROUTES.PRODUCTS);

  return (
    <Container>
      <Title>Featured Products</Title>
      <ListContainer>
        {itemList.map((item) => {
          const { data } = item;
          const { category, mainimage, name, price } = data;
          const itemData = {
            category: category.slug,
            image: {
              alt: mainimage.alt,
              url: mainimage.url,
            },
            name: name,
            price: price,
          };
          return <FeaturedItem itemData={itemData} key={item.id} />;
        })}
      </ListContainer>
      <ButtonContainer $isMobile={isMobile}>
        <Button onClick={handleClickButton}>View All Products</Button>
      </ButtonContainer>
    </Container>
  );
};

export default FeaturedProducts;
