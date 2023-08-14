import PropTypes from "prop-types";
import { useState } from "react";

const Input = ({ type, name, placeholder, value, changeFn }) => {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    changeFn(e.target.value.toLowerCase());
  };

  return (
    <>
      <label htmlFor={name} className="w-full flex flex-col text-base text-white opacity-[.6]">
        {name}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          onChange={handleChange}
          onBlur={setError}
          className="w-full md:w-[280px] h-11 py-2 px-4 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] bg-bg-grey placeholder:text-txt-white placeholder:opacity-[.2] focus:outline outline-bg-green"
        />
      </label>
      {value === "" && error && <p>Error! {name} is required </p>}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeFn: PropTypes.func,
};

export default Input;
