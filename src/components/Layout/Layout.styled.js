import styled from "styled-components";
import colors from "styles/colors";

export const Main = styled.main`
  box-sizing: border-box;
  color: ${colors.textPrimary};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  min-height: calc(100vh - 229px);
  ${({ $isTablet }) => $isTablet && "min-height: calc(100vh - 293px);"}
  ${({ $isMobile }) => $isMobile && "min-height: calc(100vh - 314px);"}
  padding: 16px 16px 0 16px;
`;
