import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
  ${({ $isMobile }) => $isMobile && 'flex-direction: column;'}
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContentGrid = styled.div`
  column-gap: 16px;
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 16px;
  row-gap: 16px;
`;

export const SideBar = styled.div`
  ${({ $isMobile }) =>
    !$isMobile && 'border-right: 1px solid rgba(51, 51, 51, 0.5);'}
  ${({ $isMobile }) =>
    $isMobile && 'border-bottom: 1px solid rgba(51, 51, 51, 0.5);'}
  box-sizing: border-box;
  flex-grow: 1;
  max-width: ${({ $isMobile }) => ($isMobile ? '100%' : '220px')};
  padding: 16px;

  & > label:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  margin: 8px 0 24px 0;
`;
