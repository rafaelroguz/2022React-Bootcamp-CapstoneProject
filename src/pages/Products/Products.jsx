import CategoryFilterCard from "components/CheckboxWithLabel";
import LoadingContainer from "components/LoadingContainer";
import products from "mocks/en-us/products.json";
import productCategories from "mocks/en-us/product-categories.json";
import React, { useEffect, useMemo, useState } from "react";
import { Container, Content, SideBar, Title } from "./Products.styled";
import FeaturedItem from "components/FeaturedItem";

const Products = () => {
  // TODO: move this two list to Redux once it's implemented
  const categoriesList = productCategories.results;
  const productsList = products.results;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredItems = useMemo(() => {
    let elementsToMap = [];

    if (!selectedCategories.length) {
      elementsToMap = productsList;
    } else {
      elementsToMap = productsList.filter(({ data }) =>
        selectedCategories.includes(data.category.id)
      );
    }

    return elementsToMap.map((product) => {
      const { data, id } = product;
      const {
        category: { id: categoryId },
        mainimage: { alt, url },
        name,
        price,
      } = data;

      const categoryName =
        categoriesList.find((category) => category.id === categoryId)?.data
          .name ?? "No Category";

      return {
        category: categoryName,
        id,
        image: { alt, url },
        name,
        price,
      };
    });
  }, [categoriesList, productsList, selectedCategories]);

  const mappedCategories = productCategories.results.map((item) => {
    const {
      data: { name },
      id,
    } = item;

    return {
      id,
      label: name,
    };
  });

  // Simulates loading products list
  useEffect(() => setTimeout(() => setIsLoading(false), 2000), []);

  const handleClickAddToCartButton = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  const handleClickCategory = (categoryId) =>
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((item) => item !== categoryId);
      }

      return [...prev, categoryId];
    });

  return (
    <LoadingContainer isLoading={isLoading}>
      <Title>This is the products page</Title>
      <Container>
        <SideBar>
          {mappedCategories.map(({ id, label }) => (
            <CategoryFilterCard
              id={id}
              isChecked={selectedCategories.includes(id)}
              key={id}
              label={label}
              onClick={handleClickCategory}
            />
          ))}
        </SideBar>
        <Content>
          {filteredItems.map((item) => (
            <FeaturedItem
              itemData={item}
              key={item.id}
              onClickButton={handleClickAddToCartButton}
            />
          ))}
        </Content>
      </Container>
    </LoadingContainer>
  );
};

export default Products;
