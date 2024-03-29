import PropTypes from "prop-types";
const buttonsStyle = {
  contactBtn:
    "w-[268px] md:w-[150px] xl:w-[210px] xl:h-14 hover:shadow-contactBtn text-xl md:text-lg xl:text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 text-white disabled:opacity-[.5] disabled:cursor-not-allowed disabled:shadow-none",
  startedBtn:
    "w-full md:w-60 h-14 text-xl md:text-lg xl:text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 text-white disabled:opacity-[.5] disabled:cursor-not-allowed disabled:shadow-none transition-all ease-linear animate-ripple hover:animate-none hover:shadow-contactBtn",
  roundBtn:
    "w-[52px] h-[52px] p-4 bg-white hover:shadow-swiper z-[1] text-xl md:text-lg xl:text-xl font-bold leading-[1.6] bg-gradient-to-b from-bg-green to-bg-blue py-3 text-white",
  closeBtn: "absolute top-4 right-2 cursor-pointer hover:shadow-menuIcon rounded-full p-2",
  num: "w-[52px] h-[52px] p-4",
};

const Button = ({ children, btnStyle, btnType, clickFn, btnClass, aria, disabled }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `rounded-full ${buttonsStyle[btnStyle]} ${additionalStyle}`;

  return (
    <button type={btnType} className={currentStyle} onClick={handleClick} aria-label={aria} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnStyle: PropTypes.oneOf(["contactBtn", "startedBtn", "roundBtn", "closeBtn", "num"]).isRequired,
  btnType: PropTypes.oneOf(["button", "submit"]),
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
  aria: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
