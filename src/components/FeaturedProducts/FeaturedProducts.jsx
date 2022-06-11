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

  const handleClickAddToCartButton = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  const handleClickViewAllProductsButton = () => {
    setLocation(ROUTES.PRODUCTS);
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0;
  };

  return (
    <Container>
      <Title>Featured Products</Title>
      <ListContainer>
        {itemList.map((item) => {
          const { id, data } = item;
          const { category, mainimage, name, price } = data;
          const itemData = {
            category: category.slug,
            id,
            image: {
              alt: mainimage.alt,
              url: mainimage.url,
            },
            name: name,
            price: price,
          };
          return (
            <FeaturedItem
              itemData={itemData}
              key={item.id}
              onClickButton={handleClickAddToCartButton}
            />
          );
        })}
      </ListContainer>
      <ButtonContainer $isMobile={isMobile}>
        <Button onClick={handleClickViewAllProductsButton}>
          View All Products
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default FeaturedProducts;
