using MenuPlanner.API.Models.Ingredients;
using System.Collections.Generic;

namespace MenuPlanner.API.Services.IngredientServices
{
    public interface IIngredientService
    {
        int Add(int recipeId, CreateIngredientDto ingredientDto);
        IngredientDto Get(int recipeId, int id);
        void Delete(int recipeId, int id);
        IEnumerable<IngredientDto> Get(int recipeId);
    }
}