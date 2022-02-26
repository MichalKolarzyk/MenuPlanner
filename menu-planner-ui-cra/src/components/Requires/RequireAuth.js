import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = (props) => {
    const location = useLocation();
    const isLoggedIn = useSelector(store => store.connection.isLoggedIn);

    if(!isLoggedIn){
        return <Navigate to='/' state={{ from: location }} replace />
    }

    return props.children
}

export default RequireAuth;