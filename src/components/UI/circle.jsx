import PropTypes from "prop-types";

const Circle = ({ children }) => {
  return <div className="w-[64px] h-[64px] xl:w-[84px] xl:h-[84px] p-[22px] mb-4 relative circle">{children}</div>;
};

Circle.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Circle;
