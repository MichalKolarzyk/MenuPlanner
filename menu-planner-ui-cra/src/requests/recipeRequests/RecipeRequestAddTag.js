class RecipeRequestAddTag {
    constructor(recipeId, tagId){
        this.methodName = "POST"
        this.url = `/api/recipe/${recipeId}/tags/${tagId}`
    }
}

export default RecipeRequestAddTag;