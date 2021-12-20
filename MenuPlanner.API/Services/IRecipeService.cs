using MenuPlanner.API.Models.Recipes;

namespace MenuPlanner.API.Services
{
    public interface IRecipeService
    {
        int Create(CreateRecipeDto recipeDto);
        RecipeDto Get(int id);
    }
}