import PropTypes from "prop-types";
const buttonsStyle = {
  contactBtn:
    "w-[268px] xl:w-40 xl:h-14 hover:shadow-contactBtn focus:shadow-contactBtn text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 text-white",
  startedBtn:
    "w-[335px] md:w-60 h-14 hover:shadow-contactBtn focus:shadow-contactBtn text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 text-white",
  roundBtn:
    "w-[52px] h-[52px] p-4 bg-white hover:shadow-swiper focus:shadow-swiper z-[1] text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 text-white",
  closeBtn: "absolute top-6 right-3 cursor-pointer hover:shadow-menuIcon focus:shadow-menuIcon rounded-full p-2",
};

const Button = ({ children, btnStyle, btnType, clickFn, btnClass, aria }) => {
  console.log(clickFn);
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `rounded-full ${buttonsStyle[btnStyle]} ${additionalStyle}`;

  return (
    <button type={btnType} className={currentStyle} onClick={handleClick} aria-label={aria}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnStyle: PropTypes.oneOf(["contactBtn", "startedBtn", "roundBtn", "closeBtn"]).isRequired,
  btnType: PropTypes.oneOf(["button", "submit"]),
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
  aria: PropTypes.string.isRequired,
};

export default Button;
