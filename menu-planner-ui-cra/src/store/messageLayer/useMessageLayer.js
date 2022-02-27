import { useDispatch } from "react-redux"
import { messageActions } from "./messageSlice";

const useMessageLayer = () => {
    const dispatch = useDispatch();

    const show = (title, message) => {
        dispatch(messageActions.show({title: title, message: message}))
    }
    const close = () => {
        dispatch(messageActions.close());
    }
 
    return {
        show,
        close,
    }
}

export default useMessageLayer;