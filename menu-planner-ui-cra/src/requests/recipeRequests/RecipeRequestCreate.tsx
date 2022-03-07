class RecipeRequestCreate {
    methodName : string;
    url : string;
    body : any;

    constructor(newRecipe : any){
        this.methodName = "POST"
        this.url = "/api/recipe"
        this.body = newRecipe
    }
}

export default RecipeRequestCreate;