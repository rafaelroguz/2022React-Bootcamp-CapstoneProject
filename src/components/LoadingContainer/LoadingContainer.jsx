import PropTypes from "prop-types";
import React from "react";
import { Container, Spinner } from "./LoadingContainer.styled";

const LoadingContainer = ({ children, isLoading }) => {
  if (isLoading) {
    return (
      <Container>
        <Spinner viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </Spinner>
      </Container>
    );
  }

  return children;
};

LoadingContainer.propTypes = {
  isLoading: PropTypes.bool,
};

export default LoadingContainer;
