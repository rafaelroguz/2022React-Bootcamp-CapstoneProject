import styled from "styled-components";

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  padding: ${({ $isMobile }) => ($isMobile ? "16px 16px 0 16px" : "16px")};
  ${({ $isMobile }) => ($isMobile ? "width: 50%;" : "")}

  & svg {
    max-width: 100%;
  }
`;
