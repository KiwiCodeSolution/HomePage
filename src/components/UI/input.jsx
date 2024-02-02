import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import i18next from "i18next";

const baseStyleInput =
  "w-full md:w-[280px] h-11 py-2 px-4 rounded-[8px] border-bg-green focus:outline outline-bg-green border-[1px] border-opacity-[.4] hover:border-opacity-[.8] bg-bg-grey placeholder:text-txt-white placeholder:opacity-[.2]";

const Input = forwardRef(({ control, name, placeholder, type, style }, ref) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation();
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: "",
    rules: { required: t(`input.error`) },
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const inputName = capitalizeFirstLetter(name);

  return (
    <div className="relative h-full">
      <label htmlFor={name} className="w-full flex flex-col text-base text-white opacity-[.6]">
        {currentLanguage === "ua" && name === "name"
          ? "Ім'я"
          : currentLanguage === "ua" && name === "phone"
          ? "Телефон"
          : inputName}
        <input
          ref={ref}
          type={type}
          name={name}
          {...field}
          placeholder={placeholder}
          autoComplete="off"
          className={`${baseStyleInput} ${fieldState.error ? "border-bg-red focus:outline outline-bg-red" : ""} `}
        />
      </label>

      {fieldState.error && (
        <span className="absolute -bottom-7 righi-0 text-red-600 italic">{fieldState.error.message}</span>
      )}
    </div>
  );
});

Input.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default Input;
