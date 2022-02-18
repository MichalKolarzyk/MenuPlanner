import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const useInput = props.useInput;
  const placeholder = props.placeholder;
  const type = props.type;

  let className = classes.input;
  if (useInput.hasError) {
    className = classes.inputError;
  }

  let labelClassName = classes.label
  if(useInput.value || useInput.isFocus){
    labelClassName = classes.labelOnActive;
  }

  return (
    <div className={classes.div}>
      <span className={labelClassName}>{placeholder}</span>
      <input
        type={type}
        className={className}
        value={useInput.value}
        onChange={useInput.onChange}
        onBlur={useInput.onBlur}
        onFocus={useInput.onFocus}
      ></input>
      {useInput.hasError && useInput.errorMessage && (
        <div className={classes.textError}>{useInput.errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
