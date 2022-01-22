class RecipeRequestGetList {
    constructor(recipeRequest){
        this.methodName = "GET"
        this.url = "/api/recipe"
        this.body = recipeRequest
    }
}

export default RecipeRequestGetList;