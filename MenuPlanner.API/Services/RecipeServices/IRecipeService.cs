using MenuPlanner.API.Abstracts;
using MenuPlanner.API.Models.Recipes;

namespace MenuPlanner.API.Services
{
    public interface IRecipeService
    {
        void AddTag(int recipeId, int tagId);
        int Create(CreateRecipeDto recipeDto);
        void RemoveTag(int recipeId, int tagId);
        PagedResponse<RecipeDto> Get(RecipeRequest request);
        RecipeDto Get(int id);
    }
}