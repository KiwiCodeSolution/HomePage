import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Input = ({ type, name, placeholder, value, changeFn, error }) => {
  const { t } = useTranslation();
  const [isShowError, setIsShowError] = useState(error);

  useEffect(() => {
    setIsShowError(error);
  }, [error]);

  const handleChange = (e) => {
    changeFn(e.target.value.toLowerCase());
    if (e.target.value !== "") {
      setIsShowError(false);
    }
  };

  return (
    <>
      <label htmlFor={name} className="w-full flex flex-col text-base text-white opacity-[.6] relative">
        {name}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          onChange={handleChange}
          className="w-full md:w-[280px] h-11 py-2 px-4 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] bg-bg-grey placeholder:text-txt-white placeholder:opacity-[.2] focus:outline outline-bg-green"
        />
        {isShowError && (
          <p className="absolute top-[68px] text-base text-red-500 italic">
            {name} {t(`input.error`)}
          </p>
        )}
      </label>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeFn: PropTypes.func,
  error: PropTypes.bool,
};

export default Input;
