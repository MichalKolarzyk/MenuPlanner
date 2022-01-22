class RecipeRequestCreate {
    constructor(newRecipe){
        this.methodName = "POST"
        this.url = "/api/recipe"
        this.body = newRecipe
    }
}

export default RecipeRequestCreate;