class AccountRequestLogin {
    methodName : string;
    url: string
    body : any;

    constructor(loginRequest : any){
        this.methodName = "POST"
        this.url = `/api/account/login`
        this.body = loginRequest
    }
}

export default AccountRequestLogin;