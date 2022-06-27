import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & h3 {
    font-size: 1.25rem;
    margin: 0 0 16px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 24px;

  & img {
    height: 150px;
    object-fit: contain;
    width: 150px;
    /* max-height: 150px;
    height: 100%;
    max-width: 150px;
    object-fit: contain;
    width: 100%; */
  }
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 24px;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  height: 48px;
  width: 100%;

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
