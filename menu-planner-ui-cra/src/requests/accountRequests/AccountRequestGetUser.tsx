class AccountRequestGetUser {
    methodName : string;
    url : string;

    constructor(token : string){
        this.methodName = "GET"
        this.url = `/api/account?token=${token}`
    }
}

export default AccountRequestGetUser;