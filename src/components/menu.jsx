import PropTypes from "prop-types";
import Button from "./UI/buttons";
import { textEffect } from "../helpers/stylesHelpers";
import LanguageBtns from "./languageBtns";
import { useTranslation } from "react-i18next";

const NAV_ELEMENTS = [
  { id: "1", linkId: "#services" },
  { id: "2", linkId: "#portfolio" },
  { id: "3", linkId: "#about" },
  { id: "4", linkId: "#contacts" },
];

const Menu = ({ type, styles, clickFn }) => {
  const { t } = useTranslation();
  return (
    <nav className="flex relative gap-x-14 md:gap-x-3 xl:gap-x-36">
      <ul
        className={`flex ${
          type === "header"
            ? "items-center justify-between gap-x-3 w-[365px] xl:w-[600px] text-lg xl:text-2xl font-medium"
            : type === "footer"
            ? ""
            : "flex-col gap-y-5 text-2xl font-medium mx-auto text-center"
        }`}
      >
        {NAV_ELEMENTS.map((el) => (
          <li key={el.id}>
            <a href={el.linkId} className={`cursor-pointer ${textEffect} text-white`} onClick={clickFn}>
              {t(`nav.${el.id - 1}`)}
            </a>
          </li>
        ))}
      </ul>
      {type !== "mobile" && (
        <div className="flex gap-x-2 sm:gap-x-4 md:gap-x-3 xl:gap-x-6 items-center">
          <LanguageBtns />
          <a href="#form">
            <Button btnStyle={"contactBtn"} btnType={"button"} aria={"Contact us"}>
              {t(`buttons.1`)}
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
