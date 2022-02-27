import AccountRequestLogin from "../requests/accountRequests/AccountRequestLogin";
import AccountRequestGetUser from "../requests/accountRequests/AccountRequestGetUser";
import useSender from "./useSender";
import useUser from "../store/user/useUser";
import useConnection from "../store/connection/useConnection";

const useAccountController = () => {
  const sender = useSender();

  const connection = useConnection();
  const user = useUser();

  const login = async (loginRequest) => {
    const request = new AccountRequestLogin(loginRequest);
    const response = await sender.send(request);
    connection.login(response.token, response.authorizationMethod);

    const userRequest = new AccountRequestGetUser(response.token);
    const userResponse = await sender.send(userRequest);
    console.log(userResponse);

    user.setUser(userResponse)
  };

  const logout = () => {
    user.setUser(null);
    connection.logout();
  };

  const getUser = () => {
    return user.user;
  };

  return {
    login,
    logout,
    getUser,
  };
};

export default useAccountController;
