import { useState } from "react";

const useInput = (useValidatorsArray) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  let valueIsValid = true;
  let errorMessage = "";
  let error;
  if(useValidatorsArray){
    error = useValidatorsArray.find(uv => uv.validationHandler(enteredValue) === false);
  }
  
  if(error){
    valueIsValid = false;
    errorMessage = error.errorMessage;
  }

  //const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const onChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlur = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    errorMessage,
    onChange,
    onBlur,
    reset,
  };
};

export default useInput;