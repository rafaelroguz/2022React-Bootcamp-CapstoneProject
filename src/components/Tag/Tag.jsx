import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './Tag.styled';

const Tag = ({ label }) => <Container>{label}</Container>;

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
