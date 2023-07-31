import PropTypes from "prop-types";
const buttonsStyle = {
  headerBtn: "w-40 h-14",
  startedBtn: "w-60 h-14 ",
};

const Button = ({ children, btnStyle, btnType, clickFn, btnClass }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `rounded-full ${buttonsStyle[btnStyle]} ${additionalStyle} mx-auto text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue  py-3 hover:shadow-headerBtn focus:shadow-headerBtn`;

  return (
    <button type={btnType} className={currentStyle} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnStyle: PropTypes.oneOf(["headerBtn", "formBtn", "startedBtn"]).isRequired,
  btnType: PropTypes.oneOf(["button", "submit"]),
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
};

export default Button;
