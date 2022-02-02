const Input = (props) => {
  const useInput = props.useInput;
  const placeholder = props.placeholder;
  const type = props.type

  return (
    <input
      type={type}
      className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-700"
      placeholder={placeholder}
      value={useInput.value}
      onChange={useInput.onChange}
      onBlur={useInput.onBlur}
    />
  );
};

export default Input;