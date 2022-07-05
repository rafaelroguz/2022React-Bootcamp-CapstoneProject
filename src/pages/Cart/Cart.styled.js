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
  height: fit-content;
  padding: 16px;
  width: ${({ $isSmallDevice }) => ($isSmallDevice ? '100%' : '70%')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'column' : 'row'};
  gap: 16px;
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
  height: fit-content;
  padding: 32px 16px;
  width: ${({ $isSmallDevice }) => ($isSmallDevice ? '100%' : '30%')};

  & button:last-child {
    margin-top: 16px;
  }

  & h2 {
    font-size: 1.5rem;
    margin: 0 auto 40px auto;
  }
`;
