import AccountRequestLogin from "../../requests/accountRequests/AccountRequestLogin";
import AccountRequestGetUser from "../../requests/accountRequests/AccountRequestGetUser";
import useSender from "./useSender";
import { useDispatch, useSelector } from "react-redux";
import { connectionActions } from "../../store/connectionSlice";

const useAccountController = () => {
  const dispatch = useDispatch();
  const connection = useSelector(state => state.connection);
  const sender = useSender();

  const login = async (loginRequest) => {
    const request = new AccountRequestLogin(loginRequest);
    const response = await sender.send(request);
    dispatch(connectionActions.setToken(response.token));
    dispatch(connectionActions.setAuthorizationMethod(response.authorizationMethod));
  };

  const logout = () => {
    dispatch(connectionActions.setToken(""));
  };

  const getUser = async () => {
    const request = new AccountRequestGetUser(connection.token);
    const response = await sender.send(request);
    //apiContext.setCurrentUser(response);
    return response;
  };

  return {
    login,
    logout,
    getUser,
  };
};

export default useAccountController;
