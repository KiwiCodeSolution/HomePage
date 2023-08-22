import { textEffect } from "../helpers/stylesHelpers";
import { useTranslation } from "react-i18next";

const LanguageBtns = () => {
  const { i18n } = useTranslation();

  const currenLanguageStyle = (value) => {
    if (i18n.resolvedLanguage === value) {
      return "text-transparent bg-clip-text bg-gradient-to-b from-bg-green to-bg-blue";
    }

    return "";
  };

  return (
    <div className="flex items-center gap-x-1 text-lg xl:text-2xl font-medium h-full">
      <button
        className={`cursor-pointer ${textEffect} ${currenLanguageStyle("ua")}`}
        aria-label="Ukrainian switch button"
        onClick={() => i18n.changeLanguage("ua")}
      >
        UA
      </button>
      <div className="border border-r-2 border-bg-green border-opacity-70 h-[50%]" />
      <button
        className={`cursor-pointer ${textEffect} ${currenLanguageStyle("en")}`}
        aria-label="English switch button"
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageBtns;
