class RecipeRequestDelete {
    constructor(id){
        this.methodName = "DELETE"
        this.url = `/api/recipe/${id}`
    }
}

export default RecipeRequestDelete;