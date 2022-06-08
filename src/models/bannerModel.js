import PropTypes from "prop-types";
import bannerDataModel from "./bannerDataModel";
import resultModel from "./resultModel";

const bannerModel = {
  ...resultModel,
  data: PropTypes.shape(bannerDataModel).isRequired,
};

export default bannerModel;
