import PropTypes from "prop-types";

const Title = ({ children, titleClass }) => {
  const additionalStyle = titleClass || "";

  return <h1 className={`${additionalStyle} title`}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  titleClass: PropTypes.string,
};

export default Title;
