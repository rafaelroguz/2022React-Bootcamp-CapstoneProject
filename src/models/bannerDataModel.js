import PropTypes from "prop-types";
import descriptionModel from "./descriptionModel";
import mainImageModel from "./mainImageModel";

const bannerDataModel = {
  title: PropTypes.string.isRequired,
  description: descriptionModel.isRequired,
  cta_link: PropTypes.string.isRequired,
  cta_target: PropTypes.string.isRequired,
  main_image: mainImageModel.isRequired,
};

export default bannerDataModel;
