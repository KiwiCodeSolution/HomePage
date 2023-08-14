import { textEffect } from "../helpers/stylesHelpers";

const LanguageBtns = () => {
  return (
    <div className="flex items-center gap-x-1 text-lg xl:text-2xl font-medium h-full">
      <button className={`cursor-pointer ${textEffect}`} aria-label="Ukrainian switch button">
        UA
      </button>
      <div className="border border-r-2 border-bg-green border-opacity-70 h-[50%]" />
      <button className={`cursor-pointer ${textEffect}`} aria-label="English switch button">
        EN
      </button>
    </div>
  );
};

export default LanguageBtns;
