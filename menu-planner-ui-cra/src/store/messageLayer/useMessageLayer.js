import { useDispatch, useSelector } from "react-redux"
import { messageActions } from "./messageSlice";

const useMessageLayer = () => {
    const dispatch = useDispatch();
    const selector = useSelector(store => store.messageLayer);

    const show = (title, message) => {
        dispatch(messageActions.show({title: title, message: message}))
    }
    const close = () => {
        dispatch(messageActions.close());
    }
 
    return {
        show,
        close,
        title: selector.title,
        message: selector.message,
        isVisible: selector.isVisible,
    }
}

export default useMessageLayer;