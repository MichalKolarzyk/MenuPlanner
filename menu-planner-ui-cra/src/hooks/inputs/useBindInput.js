import { useState } from "react";

const useBindInput = (value, setValue, useValidatorsArray) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  let valueIsValid = true;
  let errorMessage = "";
  let error;
  if(useValidatorsArray){
    error = useValidatorsArray.find(uv => uv.validationHandler(value) === false);
  }

  if(error){
    valueIsValid = false;
    errorMessage = error.errorMessage;
  }

  const hasError = !valueIsValid && isTouched;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = (event) => {
    setIsTouched(true);
    setIsFocus(false);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  const onFocus = () =>{
    setIsFocus(true);
  }

  return {
    value,
    isValid: valueIsValid,
    isFocus,
    hasError,
    errorMessage,
    onChange,
    onBlur,
    onFocus,
    reset,
  };
};

export default useBindInput;