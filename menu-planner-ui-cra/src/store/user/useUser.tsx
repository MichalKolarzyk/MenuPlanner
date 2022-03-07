import { useDispatch, useSelector } from "react-redux"
import { userActions } from "./userSlice";

const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((store : any) => store.user.user)

    const setUser = (user : any) => {
        dispatch(userActions.setUser(user));
    }

    const getFullName = () => {
        return `${user.firstName} ${user.lastName}`
    }
 
    return {
        user,
        setUser,
        getFullName,
    }
}

export default useUser;