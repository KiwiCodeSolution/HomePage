import { textEffect } from "../helpers/stylesHelpers";

const LanguageBtns = () => {
  return (
    <div className="flex items-center gap-x-1 text-lg xl:text-2xl font-medium">
      <button className={`cursor-pointer ${textEffect}`} aria-label="Ukrainian switch button">
        UA
      </button>
      <button className={`cursor-pointer ${textEffect}`} aria-label="English switch button">
        EN
      </button>
    </div>
  );
};

export default LanguageBtns;
