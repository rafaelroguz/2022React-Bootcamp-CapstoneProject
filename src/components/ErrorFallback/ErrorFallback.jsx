import Button from 'components/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { Container, ErrorDescription, Title } from './ErrorFallback.styled';

const ErrorFallback = ({ error }) => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Container>
      <Title>Something went wrong</Title>
      <ErrorDescription>{error.message}</ErrorDescription>
      <Button onClick={handleClickButton}>Back to Home</Button>
    </Container>
  );
};

export default ErrorFallback;
