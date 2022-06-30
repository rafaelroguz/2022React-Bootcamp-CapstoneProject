import styled from 'styled-components';
import colors from 'styles/colors';

export const CartButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0;
  white-space: nowrap;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: center;
  padding: 16px;
  white-space: nowrap;
  ${({ $isMobile }) => ($isMobile ? 'width: 50%;' : '')}
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;
  width: 40px;
`;

export const Text = styled.p`
  color: ${colors.textPrimary};
  font-weight: bold;
`;
