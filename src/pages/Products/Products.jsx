import LoadingContainer from "components/LoadingContainer";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setTimeout(() => setIsLoading(false), 2000), []);

  return (
    <LoadingContainer isLoading={isLoading}>
      <h1>This is the products page</h1>
    </LoadingContainer>
  );
};

export default Products;
