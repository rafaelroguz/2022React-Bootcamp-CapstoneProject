import PropTypes from "prop-types";
import mainImageModel from "./mainImageModel";

const categoryDataModel = {
  name: PropTypes.string.isRequired,
  main_image: PropTypes.shape(mainImageModel).isRequired,
};

export default categoryDataModel;
