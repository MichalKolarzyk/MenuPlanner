import React from "react";
import Input from "./Input";

const InputInline = (props : any) => {
  const useInput = props.useInput;
  const placeholder = props.placeholder;
  const type = props.type;

  return (
    <Input
      className="inline-block m-1"
      useInput={useInput}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputInline;
