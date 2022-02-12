import AccountRequestLogin from "../../requests/accountRequests/AccountRequestLogin";
import { useContext } from "react";
import ApiContext from "../../store/ApiContext";
import AccountRequestGetUser from "../../requests/accountRequests/AccountRequestGetUser";
import useSender from "./useSender";

const useAccountController = () => {
  const apiContext = useContext(ApiContext);
  const sender = useSender();

  const login = async (loginRequest) => {
    const request = new AccountRequestLogin(loginRequest);
    const response = await sender.send(request);
    apiContext.setToken(response.token);
    apiContext.setAuthorizationMethod(response.authorizationMethod);
  };

  const logout = () => {
    apiContext.logout();
  };

  const getUser = async () => {
    const request = new AccountRequestGetUser(apiContext.token);
    const response = await sender.send(request);
    apiContext.setCurrentUser(response);
    return response;
  };

  return {
    login,
    logout,
    getUser,
  };
};

export default useAccountController;
