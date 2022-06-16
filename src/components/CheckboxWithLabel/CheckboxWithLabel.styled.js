import styled from "styled-components";
import colors from "styles/colors";

export const Checkbox = styled.input`
  appearance: none;
  border: 2px solid ${colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  height: 24px;
  margin: 0 10px 0 0;
  min-width: 24px;
  outline: 0;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  width: 24px;

  &::before {
    border-style: solid;
    border-width: 0 4px 4px 0;
    content: "";
    display: block;
    left: 7px;
    height: 12px;
    max-width: 6px;
    opacity: 0;
    position: absolute;
    top: 2;
    transform: rotate(40deg);
    width: 100%;
  }

  &:checked {
    background: ${colors.secondary};
    border-color: ${colors.secondary};
    &::before {
      opacity: 1;
    }
    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

export const LabelContainer = styled.p`
  margin: 0;
`;

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  margin: 0;
  display: flex;
  padding: 0;
  position: relative;
  user-select: none;

  &::before {
    clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
    content: attr(data-content);
    position: absolute;
    text-decoration: line-through;
    text-decoration-thickness: 3px;
    transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
