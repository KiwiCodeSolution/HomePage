const Input = ({ type, name, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className="flex flex-col text-base text-white opacity-[.6]">
        {name}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-[280px] h-11 py-2 px-4 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] bg-bg-grey placeholder:text-txt-white placeholder:opacity-[.2] focus:outline outline-bg-green"
        />
      </label>
    </>
  );
};

export default Input;
