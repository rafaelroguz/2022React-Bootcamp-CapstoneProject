import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

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
  margin: 0 0 24px 0;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const QuantityContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;

  & > h3 {
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 24px 0;
`;
