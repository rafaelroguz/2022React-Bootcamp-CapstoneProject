import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Card = styled.div`
  align-items: center;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

export const CategoryText = styled.p`
  font-weight: bold;
  margin: 8px 0 40px 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  width: 100%;
  margin: 0 0 40px 0;
`;

export const Picture = styled.img`
  height: auto;
  max-width: 250px;
  width: 100%;
`;

export const Link = styled(RouterLink)`
  color: ${colors.textPrimary};
  text-decoration: none;

  &:visited {
    color: ${colors.textPrimary};
  }

  &:hover {
    color: ${colors.secondary};
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 8px 0;
  overflow-wrap: break-word;
  text-align: center;
`;
