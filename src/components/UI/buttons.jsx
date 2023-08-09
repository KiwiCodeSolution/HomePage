import PropTypes from "prop-types";
const buttonsStyle = {
  contactBtn: "w-40 h-14",
  startedBtn: "w-full md:w-60 h-14 ",
  roundBtn: "w-[52px] h-[52px] p-4 bg-white rounded-full hover:shadow-swiper focus:shadow-swiper z-[1]",
};

const Button = ({ children, btnStyle, btnType, clickFn, btnClass, aria }) => {
  console.log(clickFn);
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `rounded-full ${buttonsStyle[btnStyle]} ${additionalStyle}  text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 hover:shadow-contactBtn focus:shadow-contactBtn text-white`;

  return (
    <button type={btnType} className={currentStyle} onClick={handleClick} aria-label={aria}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnStyle: PropTypes.oneOf(["contactBtn", "startedBtn", "roundBtn"]).isRequired,
  btnType: PropTypes.oneOf(["button", "submit"]),
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
  aria: PropTypes.string.isRequired,
};

export default Button;
