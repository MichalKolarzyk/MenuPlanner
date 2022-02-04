import { useContext } from "react/cjs/react.development";
import Sender from "../../requests/Sender";
import RecipeRequestCreate from "../../requests/recipeRequests/RecipeRequestCreate";
import RecipeRequestGetList from "../../requests/recipeRequests/RecipeRequestGetList";
import RecipeRequestGetById from "../../requests/recipeRequests/RecipeRequestGetById";
import RecipeRequestAddTag from "../../requests/recipeRequests/RecipeRequestAddTag";
import RecipeRequestGetTags from "../../requests/recipeRequests/RecipeRequestGetTags";

const useRecipeController = () => {
  const apiContext = useContext(ApiContext);
  const sender = new Sender(apiContext);

  const createRecipe = async (recipe) => {
    const request = new RecipeRequestCreate(recipe);
    await sender.send(request);
  };

  const getRecipeList = async (recipeRequest) => {
    const request = new RecipeRequestGetList(recipeRequest);
    const response = await sender.send(request);
    return response;
  };

  const getRecipe = async (id) => {
    const request = new RecipeRequestGetById(id);
    const response = await sender.send(request);
    return response;
  };

  const addTagToRecipe = async (recipeId, tagId) => {
    const request = new RecipeRequestAddTag(recipeId, tagId);
    await sender.send(request);
  };

  const getTagsFromRecipe = async (recipeId) => {
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
