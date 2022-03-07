class RecipeRequestAddTag {
    methodName : string;
    url : string;
    
    constructor(recipeId : number, tagId : number){
        this.methodName = "POST"
        this.url = `/api/recipe/${recipeId}/tags/${tagId}`
    }
}

export default RecipeRequestAddTag;