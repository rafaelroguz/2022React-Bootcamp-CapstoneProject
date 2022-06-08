import styled from "styled-components";

export const Image = styled.img`
  height: auto;
  max-width: ${({ $maxWidth }) => $maxWidth ?? "100%"};
  width: 100%;
`;
