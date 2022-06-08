import PropTypes from "prop-types";

const descriptionModel = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  spans: PropTypes.arrayOf(PropTypes.string),
};

export default descriptionModel;
