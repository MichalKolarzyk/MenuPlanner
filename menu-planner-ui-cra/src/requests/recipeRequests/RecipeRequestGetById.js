class RecipeRequestGetById {
    constructor(id){
        this.methodName = "GET"
        this.url = `/api/recipe/${id}`
    }
}

export default RecipeRequestGetById;