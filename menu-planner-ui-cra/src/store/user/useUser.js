import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./userSlice";

const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.user)

    const setUser = (user) => {
        dispatch(userActions.setUser(user));
    }
 
    return {
        user,
        setUser,
    }
}

export default useUser;