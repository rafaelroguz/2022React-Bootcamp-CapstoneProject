import styled from "styled-components";
import colors from "styles/colors";

export const CartLink = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  white-space: nowrap;
`;

export const Container = styled.div`
  height: 48px;
  padding: 16px;
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;
  width: 40px;
`;

export const Text = styled.p`
  color: ${colors.textPrimary};
  font-weight: bold;
`;
