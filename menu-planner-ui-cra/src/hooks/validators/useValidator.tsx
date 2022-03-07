const useValidatror = (validationHandler: any, errorMessage : string = "") => {

    return {
        validationHandler,
        errorMessage,
    }
}

export default useValidatror