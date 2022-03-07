class RecipeRequestDelete {
    methodName : string;
    url : string;

    constructor(id : number){
        this.methodName = "DELETE"
        this.url = `/api/recipe/${id}`
    }
}

export default RecipeRequestDelete;