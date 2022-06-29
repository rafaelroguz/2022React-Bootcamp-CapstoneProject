import BaseButton from 'components/Button';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Button = styled(BaseButton)`
  max-width: 120px;
`;

export const RemoveButton = styled(Button)`
  background-color: ${colors.error};
`;

export const ColumnContainer = styled.div`
  align-items: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'center' : 'flex-start'};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  width: 100%;

  & h3 {
    font-size: 1.25rem;
    margin: 0 0 16px 0;
  }
`;

export const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'column' : 'row'};
  /* gap: ${({ $isSmallDevice }) => ($isSmallDevice ? '24px' : '80px')}; */
  gap: 24px;
  padding: 0 40px;
  width: 100%;

  & img {
    height: 150px;
    object-fit: contain;
    width: 150px;
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

export const ButtonsContainer = styled(FlexContainer)`
  align-items: flex-end;
  flex-direction: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'row' : 'column'};
  flex-grow: 1;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  height: 48px;
  width: 50px;

  &:active,
  &:focus {
    outline: ${colors.secondary} solid 1px;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
`;

export const Link = styled(RouterLink)`
  color: ${colors.textPrimary};
  margin: 0;
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

export const LinkContainer = styled.div`
  display: flex;
  justify-content: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'center' : 'flex-start'};
  width: 100%;
`;

export const PriceLabel = styled(Label)`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;
