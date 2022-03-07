class RecipeRequestGetTags {
    methodName : string;
    url : string;

    constructor(recipeId : number){
        this.methodName = "GET"
        this.url = `/api/recipe/${recipeId}/tags/`
    }
}

export default RecipeRequestGetTags;