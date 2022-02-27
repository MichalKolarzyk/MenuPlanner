import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import RoutesConfig from "../../configurations/RoutesConfig";

const RequireAuth = (props) => {
    const location = useLocation();
    const isLoggedIn = useSelector(store => store.connection.isLoggedIn);

    if(!isLoggedIn){
        return <Navigate to={RoutesConfig.loginPage} state={{ from: location }} replace />
    }

    return props.children
}

export default RequireAuth;