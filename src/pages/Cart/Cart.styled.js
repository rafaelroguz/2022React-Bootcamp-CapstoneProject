import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 100%;
`;

export const EmptyCartMessage = styled.h2`
  font-size: 1.5rem;
  margin: 24px auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 8px 0 24px 0;
`;

export const TotalContainer = styled.div`
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 16px 32px 16px;
  width: 100%;

  & button {
    max-width: 200px;
  }

  & button:last-child {
    background-color: ${colors.error};
    margin-top: 16px;
  }

  & h2 {
    font-size: 1.5rem;
    margin: 0 auto 16px auto;
  }
`;
