import { useDispatch, useSelector } from "react-redux"
import { connectionActions } from "./connectionSlice";

const useConnection = () => {
    const dispatch = useDispatch();
    const connection = useSelector((store : any) => store.connection);
    
    const isLoggedIn = () =>{
        if(!!connection.token){
            return true;
        }
        return false;
    }

    const setIsBusy = (value : any) => {
        dispatch(connectionActions.setIsBusy(value));
    }

    const logout = () => {
        dispatch(connectionActions.setToken(""));
    }

    const login = (token : string, authorizationMethod : string) => {
        dispatch(connectionActions.setAuthorizationMethod(authorizationMethod));
        dispatch(connectionActions.setToken(token));
    }

    return {
        isLoggedIn,
        isBusy: connection.isBusy,
        setIsBusy,
        baseUrl: connection.baseUrl,
        authorizationMethod: connection.authorizationMethod,
        token: connection.token,
        login,
        logout,
    }

}

export default useConnection;