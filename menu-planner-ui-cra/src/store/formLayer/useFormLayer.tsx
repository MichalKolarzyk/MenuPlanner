import { useDispatch, useSelector } from "react-redux"
import { formActions } from "./formSlice";

const useFormLayer = () => {
    const dispatch = useDispatch();
    const selector = useSelector((store : any) => store.formLayer)

    const show = (title : string, form : any) => {
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