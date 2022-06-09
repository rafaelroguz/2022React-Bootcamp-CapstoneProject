import PropTypes from "prop-types";

const resultModel = {
  id: PropTypes.string.isRequired,
  uid: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  first_publication_date: PropTypes.string.isRequired,
  last_publication_date: PropTypes.string.isRequired,
  slugs: PropTypes.arrayOf(PropTypes.string).isRequired,
  linked_documents: PropTypes.arrayOf(PropTypes.string).isRequired,
  lang: PropTypes.string.isRequired,
  alternate_languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      lang: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default resultModel;
