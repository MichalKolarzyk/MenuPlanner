const Input = (props) => {
  const useInput = props.useInput;
  const placeholder = props.placeholder;
  const type = props.type

  return (
    <input
      type={type}
      className="mt-2 px-4 py-2 outline-none w-full rounded-lg shadow-lg bg-gray-100 text-gray-700"
      placeholder={placeholder}
      value={useInput.value}
      onChange={useInput.onChange}
      onBlur={useInput.onBlur}
    />
  );
};

export default Input;