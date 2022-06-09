import styled from "styled-components";

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonsContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ControlButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  height: ${({ $isMobile }) => ($isMobile ? "24" : "32")}px;
  justify-content: center;
  padding: 0;
  width: ${({ $isMobile }) => ($isMobile ? "24" : "32")}px;

  & svg {
    height: ${({ $isMobile }) => ($isMobile ? "24" : "32")}px;
    width: ${({ $isMobile }) => ($isMobile ? "24" : "32")}px;
  }
`;

export const IndicatorButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 ${({ $isMobile }) => ($isMobile ? "16" : "24")}px;
  padding: 0;
  width: 16px;
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 16px;
`;

export const InnerContainer = styled.div`
  margin-bottom: 32px;
  transition: transform 0.3s;
  white-space: nowrap;
  width: 100%;
`;
