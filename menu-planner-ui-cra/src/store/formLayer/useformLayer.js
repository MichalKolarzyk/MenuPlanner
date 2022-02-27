import { useDispatch, useSelector } from "react-redux"
import { formActions } from "./formSlice";

const useFormLayer = () => {
    const dispatch = useDispatch();
    const selector = useSelector(store => store.formLayer)

    const show = (title, form) => {
        dispatch(formActions.show({form: form, title: title}))
    }
    const close = () => {
        dispatch(formActions.close());
    }
 
    return {
        show,
        close,
        isVisible: selector.isVisible,
        form: selector.form,
        title: selector.title,
    }
}

export default useFormLayer;