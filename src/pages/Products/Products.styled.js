import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  border: 1px solid red;
  flex-grow: 1;
`;

export const SideBar = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 150px;
  padding: 8px;

  & > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Title = styled.h1`
  margin: 1.75rem 0;
`;
