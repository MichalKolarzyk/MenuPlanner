import RecipeRequestAddTag from "../requests/recipeRequests/RecipeRequestAddTag";
import RecipeRequestCreate from "../requests/recipeRequests/RecipeRequestCreate";
import RecipeRequestGetById from "../requests/recipeRequests/RecipeRequestGetById";
import RecipeRequestGetList from "../requests/recipeRequests/RecipeRequestGetList";
import RecipeRequestGetTags from "../requests/recipeRequests/RecipeRequestGetTags";
import useSender from "./useSender";

const useRecipeController = () => {
  const sender = useSender();

  const createRecipe = async (recipe : any) => {
    const request = new RecipeRequestCreate(recipe);
    await sender.send(request);
  };

  const getRecipeList = async (recipeRequest : any) => {
    const request = new RecipeRequestGetList(recipeRequest);
    const response = await sender.send(request);
    return response;
  };

  const getRecipe = async (id : number) => {
    const request = new RecipeRequestGetById(id);
    const response = await sender.send(request);
    return response;
  };

  const addTagToRecipe = async (recipeId : number, tagId : number) => {
    const request = new RecipeRequestAddTag(recipeId, tagId);
    await sender.send(request);
  };

  const getTagsFromRecipe = async (recipeId : number) => {
    const request = new RecipeRequestGetTags(recipeId);
    const response = await sender.send(request);
    return response;
  };

  return {
    createRecipe,
    getRecipeList,
    getRecipe,
    addTagToRecipe,
    getTagsFromRecipe,
  };
};

export default useRecipeController;
