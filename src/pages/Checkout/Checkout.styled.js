import Button from 'components/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const BackToCartButton = styled(Button)`
  color: ${colors.textPrimary};
  background-color: transparent;
  border: none;

  &:hover {
    color: ${colors.secondary};
    border: 2px solid ${colors.secondary};
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.error};
  margin: 8px 0 0 0;
`;

export const FieldContainer = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: ${({ $isSmallDevice }) =>
    $isSmallDevice ? 'column' : 'row'};
  gap: 16px;
  width: 100%;

  & h1 {
    margin: 8px 0 24px 0;
    width: 100%;
  }
`;

export const FormContent = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  max-width: ${({ $isSmallDevice }) => ($isSmallDevice ? '100%' : '70%')};
  padding: 16px;
  width: 100%;
`;

export const EmptyCartMessage = styled.h2`
  font-size: 1.5rem;
  margin: 24px auto;
  text-align: center;
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

export const Label = styled.label`
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

export const SummaryContent = styled.div`
  background-color: white;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  max-width: ${({ $isSmallDevice }) => ($isSmallDevice ? '100%' : '30%')};
  padding: 16px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  resize: none;
  width: 100%;

  &:active,
  &:focus {
    outline: ${colors.secondary} solid 1px;
  }
`;

export const Total = styled.h2`
  margin: 24px 0;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 8px 0 24px 0;
`;
