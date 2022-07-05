import BaseButton from 'components/Button';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Button = styled(BaseButton)`
  max-width: 120px;
`;

export const ColumnContainer = styled.div`
  align-items: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'center' : 'flex-start'};
  display: flex;
  flex-direction: column;
  width: fit-content;

  & h3 {
    font-size: 1.25rem;
    margin: 0;
  }
`;

export const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'column' : 'row'};
  gap: 24px;
  justify-content: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'center' : 'space-between'};
  padding: 0 16px;
  width: 100%;

  & img {
    height: auto;
    max-height: 150px;
    max-width: 150px;
    object-fit: contain;
    width: 100%;
  }
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'center' : 'flex-start'};
  gap: 16px;
  width: 100%;
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
`;

export const Link = styled(RouterLink)`
  color: ${colors.textPrimary};
  margin: 0 0 16px 0;
  text-decoration: none;

  & h3 {
    text-align: ${({ $isSmallDevice }) => ($isSmallDevice ? 'center' : 'left')};
  }

  &:visited {
    color: ${colors.textPrimary};
  }

  &:hover {
    color: ${colors.secondary};
    text-decoration: underline;
  }
`;

export const PriceLabel = styled(Label)`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

export const RemoveButton = styled(Button)`
  background-color: transparent;
  padding: 8px;
  width: fit-content;

  & svg {
    height: 32px;

    &:hover {
      stroke: ${colors.secondary};
    }
  }
`;

export const SubtotalLabel = styled(Label)`
  margin-top: 16px;
`;
