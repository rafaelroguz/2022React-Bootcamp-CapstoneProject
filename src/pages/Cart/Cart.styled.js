import Button from 'components/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const ClearCartButton = styled(Button)`
  color: ${colors.textPrimary};
  background-color: transparent;
  border: none;

  &:hover {
    color: ${colors.secondary};
    border: 2px solid ${colors.secondary};
  }
`;

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
  padding: 16px;
  width: 100%;

  & button {
    max-width: 200px;
  }

  & button:last-child {
    margin-top: 16px;
  }

  & h2 {
    font-size: 1.5rem;
    margin: 0 auto 16px auto;
  }
`;
