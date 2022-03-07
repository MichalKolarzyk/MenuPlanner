import React from "react";

const SubmitButton = (props : any) => {
  const disabled = props.disabled;

  let className = "transition duration-2500 ease mt-6 px-4 py-2 tracking-widest border-2 text-white bg-red-400 w-full rounded-lg shadow-lg hover:-translate-y-1"
  if(disabled){
    className = "transition duration-2500 ease mt-6 px-4 py-2 tracking-widest border-2 text-white bg-red-300 w-full rounded-lg shadow-lg"
  }

  return (
    <button
      disabled={disabled}
      type="submit"
      className={className}
    >
      {props.children}
    </button>
  );
};

export default SubmitButton;
