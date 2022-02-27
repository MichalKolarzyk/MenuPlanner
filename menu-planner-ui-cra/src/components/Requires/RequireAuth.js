import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import RoutesConfig from "../../configurations/RoutesConfig";
import useConnection from "../../store/connection/useConnection";

const RequireAuth = (props) => {
    const location = useLocation();
    const connection = useConnection();
    const isLoggedIn = connection.isLoggedIn();

    if(!isLoggedIn){
        return <Navigate to={RoutesConfig.loginPage} state={{ from: location }} replace />
    }

    return props.children
}

export default RequireAuth;