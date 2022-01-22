class RecipeRequestGetTags {
    constructor(recipeId){
        this.methodName = "GET"
        this.url = `/api/recipe/${recipeId}/tags/`
    }
}

export default RecipeRequestGetTags;