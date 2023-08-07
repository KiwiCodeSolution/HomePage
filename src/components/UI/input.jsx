const Input = ({ type, name, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className="flex flex-col">
        {name}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-[280px] h-11 rounded-[8px] border-[1px] border-bg-green border-opacity-[.4] placeholder-slate-200 bg-bg-grey"
        />
      </label>
    </>
  );
};

export default Input;
