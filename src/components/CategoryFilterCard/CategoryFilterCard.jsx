import PropTypes from "prop-types";
import React from "react";
import { Checkbox, Container, Label } from "./CategoryFilterCard.styled";

const CategoryFilterCard = ({ id, isSelected, label, onClickCategory }) => {
  const handleClickCategory = () => onClickCategory(id);

  // TODO: fix checbox with long string not using the correct size
  return (
    <Container>
      <Checkbox
        checked={isSelected}
        id={id}
        name="categoryButton"
        type="checkbox"
        onClick={handleClickCategory}
      />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

CategoryFilterCard.propTypes = {
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

export default CategoryFilterCard;
