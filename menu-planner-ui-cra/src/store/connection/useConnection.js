import { useDispatch, useSelector } from "react-redux"
import { connectionActions } from "./connectionSlice";

const useConnection = () => {
    const dispatch = useDispatch();
    const connection = useSelector(store => store.connection);
    
    const isLoggedIn = () =>{
        if(!!connection.token){
            return true;
        }
        return false;
    }

    return {
        isLoggedIn,
    }

}