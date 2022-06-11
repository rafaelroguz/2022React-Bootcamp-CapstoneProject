import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 16px;
`;

export const SideBar = styled.div`
  border-right: 1px solid rgba(51, 51, 51, 0.5);
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 220px;
  padding: 16px;

  & > label:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  margin: 1.75rem 0;
`;
