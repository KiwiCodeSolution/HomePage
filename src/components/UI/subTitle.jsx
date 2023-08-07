import PropTypes from "prop-types";

const SubTitle = ({ children, subTitleClass }) => {
  const additionalStyle = subTitleClass || "";

  return <p className={`${additionalStyle} text-2xl mt-2`}>{children}</p>;
};

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  SubTitleClass: PropTypes.string,
};

export default SubTitle;
