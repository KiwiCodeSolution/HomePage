import PropTypes from "prop-types";
import Button from "./UI/buttons";
import { textEffect } from "../helpers/stylesHelpers";
import LanguageBtns from "./languageBtns";

const NAV_ELEMENTS = [
  { name: "Services", linkId: "#services" },
  { name: "Portfolio", linkId: "#portfolio" },
  { name: "About company", linkId: "#about" },
  { name: "Contacts", linkId: "#contacts" },
];

const Menu = ({ type, styles, clickFn }) => {
  return (
    <nav className="flex relative gap-x-14 md:gap-x-3 xl:gap-x-36">
      <ul
        className={`flex ${
          type === "header"
            ? "items-center justify-center gap-x-3 xl:gap-x-10 w-[365px] xl:w-[548px] text-lg xl:text-2xl font-medium"
            : type === "footer"
            ? ""
            : "flex-col gap-y-5 text-2xl font-medium mx-auto text-center"
        }`}
      >
        {NAV_ELEMENTS.map((el) => (
          <li key={el.name}>
            <a href={el.linkId} className={`cursor-pointer ${textEffect} text-white`} onClick={clickFn}>
              {el.name}
            </a>
          </li>
        ))}
      </ul>
      {type !== "mobile" && (
        <div className="flex gap-x-2 sm:gap-x-4 md:gap-x-3 xl:gap-x-6 items-center">
          <LanguageBtns />
          <a href="#form">
            <Button btnStyle={"contactBtn"} btnType={"button"} aria={"Contact us"}>
              Contact us
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

Menu.propTypes = {
  type: PropTypes.oneOf(["header", "footer", "mobile"]).isRequired,
  styles: PropTypes.string,
  clickFn: PropTypes.func,
};

export default Menu;
