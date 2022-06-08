import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
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

export const ImageLink = styled.a`
  display: flex;
  justify-content: center;
  margin: 0 8px;
  max-width: 80%;
`;

// TODO: add carousel
export const ListContainer = styled.li`
  width: 100%;
`;
