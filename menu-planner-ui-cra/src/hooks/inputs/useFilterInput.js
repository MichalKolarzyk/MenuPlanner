import { useState } from "react";

const useFilterInput = (value, setValue, useValidatorsArray) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [valueIsValid, setValueIsValid] = useState(true);
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const hasError = !valueIsValid && isTouched;

  const onChange = (event) => {
    const newValue = event.target.value;
    let newError;
    if (useValidatorsArray) {
      
      newError = useValidatorsArray.find(
          (uv) => uv.validationHandler(newValue) === false
        )

      if (newError) {
        setValueIsValid(false);
        setError(newError)
        setErrorMessage(newError.errorMessage);
        setIsTouched(true);
        return;
      }
    }

    setValue(newValue);
    setValueIsValid(true);
  };

  const onBlur = (event) => {
    setIsTouched(true);
    setIsFocus(false);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

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

export default useFilterInput;
