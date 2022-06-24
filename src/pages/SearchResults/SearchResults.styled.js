import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
`;

export const ContentGrid = styled.div`
  column-gap: 16px;
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 16px;
  row-gap: 16px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  flex-grow: 1;
  text-align: center;
`;
