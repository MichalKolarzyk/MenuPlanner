class StepController{
    constructor(apiContext){
        this.sender = new Sender(apiContext);
    }
    createRecipe = async (recipe) => {
        const request = new RecipeRequestCreate(recipe);
        await sender.send(request);
    }

    getRecipeList = async (recipeRequest) => {
        const request = new RecipeRequestGetList(recipeRequest)
        const response = await sender.send(request);
        return response;
    }

    getRecipe = async (id) => {
        const request = new RecipeRequestGetById(id)
        const response = await sender.send(request);
        return response;
    }

    addTagToRecipe = async (recipeId, tagId) => {
        const request = new RecipeRequestAddTag(recipeId, tagId)
        await sender.send(request);
    }

    getTagsFromRecipe = async (recipeId) => {
        const request = new RecipeRequestGetTags(recipeId);
        const response = await sender.send(request);
        return response;
    }
}
export default StepController