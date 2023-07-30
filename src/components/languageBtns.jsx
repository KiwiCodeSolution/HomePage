import { textEffect } from "../helpers/stylesHelpers";

const LanguageBtns = () => {
  return (
    <div className="flex items-center gap-x-2 text-2xl font-medium">
      <button className={`cursor-pointer ${textEffect}`}>UA</button>
      <button className={`cursor-pointer ${textEffect}`}>EN</button>
    </div>
  );
};

export default LanguageBtns;
