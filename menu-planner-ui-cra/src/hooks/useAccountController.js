import Sender from "../requests/Sender";
import AccountRequestLogin from '../requests/accountRequests/AccountRequestLogin'
import { useContext } from "react";
import ApiContext from "../store/ApiContext";
import AccountRequestGetUser from "../requests/accountRequests/AccountRequestGetUser";

const useAccountController = () => {
    const apiContext = useContext(ApiContext)
    const sender = new Sender(apiContext);

    const login = async (loginRequest) => {
        const request = new AccountRequestLogin(loginRequest)
        const response = await sender.send(request);
        apiContext.setToken(response.token);
        apiContext.setAuthorizationMethod(response.authorizationMethod)
    }

    const getUser = async () => {
        const request = new AccountRequestGetUser(apiContext.token);
        const response = await sender.send(request);
        return response;
    }

    return {
        login,
        getUser,
      };
}

export default useAccountController