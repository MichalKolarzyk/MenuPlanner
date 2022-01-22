class RecipeRequestRemoveTag {
    constructor(recipeId, tagId){
        this.methodName = "DELETE"
        this.url = `/api/recipe/${recipeId}/tags/${tagId}`
    }
}

export default RecipeRequestRemoveTag;