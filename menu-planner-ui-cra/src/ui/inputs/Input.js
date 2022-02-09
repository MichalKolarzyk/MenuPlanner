const Input = (props) => {
  const useInput = props.useInput;
  const placeholder = props.placeholder;
  const type = props.type;

  let className =
    "mt-2 px-4 py-2 outline-none w-full rounded-lg shadow-lg bg-gray-100 text-gray-700";
  if (useInput.hasError) {
    className =
      "mt-2 px-4 py-2 outline-none w-full rounded-lg shadow-lg bg-red-100 text-gray-700";
  }

  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={useInput.value}
        onChange={useInput.onChange}
        onBlur={useInput.onBlur}
      />
      {useInput.hasError && useInput.errorMessage && (
        <div className="transition duration-1000 ease w-full px-4 mt-2 text-red-400">
          {useInput.errorMessage}
        </div>
      )}
    </>
  );
};

export default Input;
