import { useState } from "react";

const useBindInput = (value : any, setValue : any, useValidatorsArray : any) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  let valueIsValid = true;
  let errorMessage = "";
  let error;
  if(useValidatorsArray){
    error = useValidatorsArray.find((uv: any) => uv.validationHandler(value) === false);
  }

  if(error){
    valueIsValid = false;
    errorMessage = error.errorMessage;
  }

  const hasError = !valueIsValid && isTouched;

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  const onBlur = (event: any) => {
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