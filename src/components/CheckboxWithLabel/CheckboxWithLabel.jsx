import PropTypes from "prop-types";
import React from "react";
import { Checkbox, Label, LabelContainer } from "./CheckboxWithLabel.styled";

const CheckboxWithLabel = ({ id, isChecked, label, onClick }) => {
  const handleClickCategory = () => onClick(id);

  return (
    <Label>
      <Checkbox
        checked={isChecked}
        id={id}
        name="categoryButton"
        type="checkbox"
        onChange={handleClickCategory}
      />
      <LabelContainer>{label}</LabelContainer>
    </Label>
  );
};

CheckboxWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CheckboxWithLabel;
