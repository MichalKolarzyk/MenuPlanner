class AccountRequestGetUser {
    constructor(token){
        this.methodName = "GET"
        this.url = `/api/account?token=${token}`
    }
}

export default AccountRequestGetUser;