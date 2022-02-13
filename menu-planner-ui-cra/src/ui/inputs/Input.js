import { useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const useInput = props.useInput;
  const placeholder = props.placeholder;
  const type = props.type;

  const [isUsed, setIsUsed] = useState(false);

  let className = classes.input;
  if (useInput.hasError) {
    className = classes.inputError;
  }

  let labelClassName = classes.label
  if(isUsed){
    labelClassName = classes.labelOnActive;
  }

  const blurHandler = () => {
    useInput.onBlur();
    if(!useInput.value){
      setIsUsed(false);
    }
  }

  return (
    <div className={classes.div}>
      <span className={labelClassName}>{placeholder}</span>
      <input
        type={type}
        className={className}
        value={useInput.value}
        onChange={useInput.onChange}
        onBlur={blurHandler}
        onFocus={() => setIsUsed(true)}
        
      ></input>
      {useInput.hasError && useInput.errorMessage && (
        <div className={classes.textError}>{useInput.errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
