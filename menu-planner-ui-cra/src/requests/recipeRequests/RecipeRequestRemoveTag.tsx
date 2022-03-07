class RecipeRequestRemoveTag {
    methodName : string;
    url : string;

    constructor(recipeId : number, tagId : number){
        this.methodName = "DELETE"
        this.url = `/api/recipe/${recipeId}/tags/${tagId}`
    }
}

export default RecipeRequestRemoveTag;