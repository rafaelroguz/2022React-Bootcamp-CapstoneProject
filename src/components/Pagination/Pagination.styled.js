import Button from 'components/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const ControlButton = styled(Button)`
  height: 32px;
  padding: 8px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

export const PageButton = styled.li`
  height: 32px;
  width: 32px;

  & button {
    background-color: ${({ $isActive }) =>
      $isActive ? colors.secondary : 'transparent'};
    border: none;
    border-radius: 50%;
    color: ${colors.textPrimary};
    font-weight: bold;
    height: 100%;
    width: 100%;
  }

  & button:hover {
    ${({ $isActive }) => !$isActive && `border: 2px solid ${colors.secondary}`}
  }
`;

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;

  & li:not(:last-child) {
    margin-right: ${({ $isSmallDevice }) => ($isSmallDevice ? '4px' : '16px')};
  }
`;
