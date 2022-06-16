import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({ children, ...buttonProps }) => (
  <StyledButton {...buttonProps}>{children}</StyledButton>
);

export default Button;
