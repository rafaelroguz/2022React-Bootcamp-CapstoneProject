import styled from "styled-components";
import colors from "styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${colors.textPrimary};
  font-size: 1.75rem;
  margin: 1.5rem 0;
`;
