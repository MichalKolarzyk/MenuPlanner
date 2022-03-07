class RecipeRequestGetById {
    methodName : string;
    url : string;

    constructor(id : number){
        this.methodName = "GET"
        this.url = `/api/recipe/${id}`
    }
}

export default RecipeRequestGetById;