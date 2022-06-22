import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'column' : 'row'};
  gap: 16px;
  margin: 8px 0 48px 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin: 0;
  width: 100%;
`;

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: ${({ $isSmallDevice }) => ($isSmallDevice ? '100%' : '50%')};

  & > img {
    height: auto;
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
  }
`;

export const Input = styled.input`
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  height: 48px;
  width: 25%;

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

export const Label = styled.h3`
  margin: 0;
  white-space: nowrap;
`;

export const Link = styled(RouterLink)`
  color: ${colors.textPrimary};
  font-weight: bold;
  margin-bottom: 24px;
  text-decoration: none;
  margin-bottom: 24px;
  white-space: nowrap;
  width: fit-content;

  &:visited {
    color: ${colors.textPrimary};
  }

  &:hover {
    color: ${colors.secondary};
    text-decoration: underline;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${({ $isSmallDevice }) => ($isSmallDevice ? '100%' : '50%')};
`;

export const PriceLabel = styled(Label)`
  font-size: 2.5rem;
`;

export const SpecsList = styled.ul`
  & li:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 24px 0;
`;
