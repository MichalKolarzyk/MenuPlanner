using MenuPlanner.API.Models.Recipes;

namespace MenuPlanner.API.Services
{
    public interface IRecipeService
    {
        void AddTag(int recipeId, int tagId);
        int Create(CreateRecipeDto recipeDto);
        RecipeDto Get(int id);
        void RemoveTag(int recipeId, int tagId);
    }
}