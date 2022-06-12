import styled from "styled-components";
import colors from "styles/colors";

export const StyledButton = styled.button`
  background-color: ${colors.secondary};
  border: none;
  border-radius: 8px;
  color: black;
  font-weight: bold;
  height: 48px;
  padding: 8px 16px;
  width: 100%;

  &:disabled {
    opacity: 0.6;
  }
`;
