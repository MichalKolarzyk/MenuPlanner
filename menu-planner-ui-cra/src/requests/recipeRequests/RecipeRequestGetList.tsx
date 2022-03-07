class RecipeRequestGetList {
    methodName : string;
    url : string;
    body : any;

    constructor(recipeRequest : any){
        this.methodName = "GET"
        this.url = "/api/recipe"
        this.body = recipeRequest
    }
}

export default RecipeRequestGetList;