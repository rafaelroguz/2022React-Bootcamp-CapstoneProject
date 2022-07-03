import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;

  & button {
    max-width: 200px;
  }
`;

export const ErrorDescription = styled.p`
  font-size: 1.5rem;
  margin: 0 auto 24px auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 24px auto;
  text-align: center;
`;
