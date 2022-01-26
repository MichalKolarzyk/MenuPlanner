import Sender from "../requests/Sender";
import AccountRequestLogin from '../requests/accountRequests/AccountRequestLogin'

class AccountController {
    constructor(apiContext){
        this.sender = new Sender(apiContext);
    }

    login = async (loginRequest) => {
        const request = new AccountRequestLogin(loginRequest)
        const response = await this.sender.send(request);
        this.sender.apiContext.setToken(response.token);
    }
}

export default AccountController