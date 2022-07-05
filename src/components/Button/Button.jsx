import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
