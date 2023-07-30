import PropTypes from "prop-types";
import Button from "./UI/buttons";
import { textEffect } from "../helpers/stylesHelpers";
import LanguageBtns from "./languageBtns";
// import SocialIconsList from "./socialIconsList";

const NAV_ELEMENTS = [
  { name: "Services", linkId: "#services" },
  { name: "Portfolio", linkId: "#portfolio" },
  { name: "About company", linkId: "#about" },
  { name: "Contacts", linkId: "#contacts" },
];

const Menu = ({ type, styles }) => {
  return (
    <nav className="flex relative gap-x-36">
      <ul
        className={`flex ${
          type === "header"
            ? "items-center justify-center gap-x-10 w-[548px] ml-[154px] text-2xl font-medium"
            : type === "footer"
            ? ""
            : "flex-col gap-y-5 text-2xl font-medium mx-auto text-center"
        }`}
      >
        {NAV_ELEMENTS.map((el) => (
          <li key={el.name}>
            <a href={el.linkId} className={`cursor-pointer ${textEffect}`}>
              {el.name}
            </a>
          </li>
        ))}
      </ul>
      {type !== "mobile" && (
        <div className="flex gap-x-6 items-center">
          <LanguageBtns />
          <Button btnStyle={"headerBtn"} btnType={"button"}>
            Contact us
          </Button>
        </div>
      )}
      {/* <SocialIconsList type="hero" /> */}
    </nav>
  );
};

Menu.propTypes = {
  type: PropTypes.oneOf(["header", "footer", "mobile"]).isRequired,
  styles: PropTypes.string,
};

export default Menu;
