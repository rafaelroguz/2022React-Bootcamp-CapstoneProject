import PropTypes from "prop-types";
import categoryDataModel from "./categoryDataModel";
import resultModel from "./resultModel";

const categoryModel = {
  ...resultModel,
  data: PropTypes.shape(categoryDataModel).isRequired,
};

export default categoryModel;
