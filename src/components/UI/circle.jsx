import PropTypes from "prop-types";

const Circle = ({ children, section }) => {
  return (
    <div
      className={`w-[64px] min-h-[64px] xl:w-[84px] xl:min-h-[84px] p-[22px] mb-4 relative + ${
        section === "pinciples" ? "circle_pinciples mx-auto" : "circle"
      }`}
    >
      {children}
    </div>
  );
};

Circle.propTypes = {
  children: PropTypes.node.isRequired,
  section: PropTypes.string,
};
export default Circle;
