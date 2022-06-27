import styled from 'styled-components';
import colors from 'styles/colors';

export const Bubble = styled.span`
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 50%;
  bottom: 0;
  display: flex;
  font-weight: bold;
  height: 24px;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 24px;
`;

export const CartButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0;
  position: relative;
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
