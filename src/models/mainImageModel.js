import PropTypes from "prop-types";

const mainImageModel = PropTypes.shape({
  dimensions: {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  },
  alt: PropTypes.string.isRequired,
  copyright: PropTypes.string,
  url: PropTypes.string.isRequired,
});

export default mainImageModel;
