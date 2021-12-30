using MenuPlanner.API.Models.Ingredients;

namespace MenuPlanner.API.Services.IngredientServices
{
    public interface IIngredientService
    {
        int Add(int recipeId, CreateIngredientDto ingredientDto);
        void Delete(int id);
    }
}