import Sender from "../requests/Sender";
import AccountRequestLogin from '../requests/accountRequests/AccountRequestLogin'
import { useContext } from "react";
import ApiContext from "../store/ApiContext";

const useAccountController = () => {
    const apiContext = useContext(ApiContext)
    const sender = new Sender(apiContext);

    const login = async (loginRequest) => {
        const request = new AccountRequestLogin(loginRequest)
        const response = await sender.send(request);
        apiContext.setToken(response.token);
        console.log(apiContext.token);
    }

    return {
        login,
      };
}

export default useAccountController