import styled from "styled-components";
import colors from "styles/colors";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const Spinner = styled.svg`
  animation: rotate 2s linear infinite;
  height: 170px;
  margin: -25px 0 0 -25px;
  width: 70px;

  & .path {
    animation: dash 1.5s ease-in-out infinite;
    stroke: ${colors.secondary};
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
