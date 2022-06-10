import CategoryFilterCard from "components/CategoryFilterCard";
import LoadingContainer from "components/LoadingContainer";
import productCategories from "mocks/en-us/product-categories.json";
import React, { useEffect, useState } from "react";
import { Container, Content, SideBar, Title } from "./Products.styled";

// TODO: for dev only. remove before pushing to pr
const testInitialFilters = productCategories.results[1].id;

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([
    testInitialFilters,
  ]);

  console.log(selectedCategories);

  const categoriesList = productCategories.results.map((item) => {
    const {
      id,
      data: { name },
    } = item;

    return {
      id,
      label: name,
    };
  });

  // Simulates loading products list
  useEffect(() => setTimeout(() => setIsLoading(false), 2000), []);

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
          {categoriesList.map(({ id, label }) => (
            <CategoryFilterCard
              id={id}
              isSelected={selectedCategories.includes(id)}
              key={id}
              label={label}
              onClickCategory={handleClickCategory}
            />
          ))}
        </SideBar>
        <Content>Content</Content>
      </Container>
    </LoadingContainer>
  );
};

export default Products;
