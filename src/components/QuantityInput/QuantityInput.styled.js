import Button from 'components/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  width: fit-content;
`;

export const ControlButton = styled(Button)`
  width: 48px;
`;

export const Input = styled.input`
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  height: 48px;
  width: 60px;

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
