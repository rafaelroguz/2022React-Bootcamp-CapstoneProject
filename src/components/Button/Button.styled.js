import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledButton = styled.button`
  background-color: ${colors.secondary};
  border: none;
  border-radius: 8px;
  color: ${colors.textPrimary};
  font-size: 1rem;
  font-weight: bold;
  height: 48px;
  padding: 8px 16px;
  width: 100%;

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
  }

  &:hover {
    color: white;
  }
`;
