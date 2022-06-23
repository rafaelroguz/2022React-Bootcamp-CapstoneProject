import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  justify-content: center;
  width: 100%;
`;

export const ControlButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  height: 64px;
  justify-content: center;
  padding: 0;
  width: 36px;

  & svg {
    height: 32px;
    width: 16px;
  }
`;

export const DisplayedImage = styled.img`
  height: auto;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ $isMobile }) => ($isMobile ? '0' : '0 8px')};
  max-width: ${({ $isMobile }) => ($isMobile ? '100%' : '80%')};
`;

export const ImageLink = styled.a`
  display: flex;
  justify-content: center;
  margin: ${({ $isMobile }) => ($isMobile ? '0' : '0 8px')};
  max-width: ${({ $isMobile }) => ($isMobile ? '100%' : '80%')};
`;
