using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Recipes;
using System.Collections.Generic;

namespace MenuPlanner.API.Services.FavoriteRecipeServices
{
    public interface IFavoriteRecipeService
    {
        void Create(int recipeId);
        IEnumerable<RecipeDto> Get();
        void Remove(int recipeId);
    }
}