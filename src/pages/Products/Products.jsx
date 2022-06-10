import LoadingContainer from "components/LoadingContainer";
import React, { useEffect, useState } from "react";
import { Container } from "./Products.styled";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setTimeout(() => setIsLoading(false), 2000), []);

  return (
    <LoadingContainer isLoading={isLoading}>
      <Container>
        <h1>This is the products page</h1>
      </Container>
    </LoadingContainer>
  );
};

export default Products;
