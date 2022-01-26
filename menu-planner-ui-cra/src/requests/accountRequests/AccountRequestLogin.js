class RecipeRequestAddTag {
    constructor(loginRequest){
        this.methodName = "POST"
        this.url = `/api/account/login`
        this.body = loginRequest
    }
}

export default RecipeRequestAddTag;