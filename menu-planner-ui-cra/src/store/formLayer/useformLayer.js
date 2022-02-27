import { useDispatch } from "react-redux"
import { formActions } from "./formSlice";

const useFormLayer = () => {
    const dispatch = useDispatch();

    const show = (form) => {
        dispatch(formActions.show(form))
    }
    const close = () => {
        dispatch(formActions.close());
    }
 
    return {
        show,
        close,
    }
}

export default useFormLayer;