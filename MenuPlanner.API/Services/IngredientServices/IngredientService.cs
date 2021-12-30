using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Ingredients;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.IngredientServices
{
    public class IngredientService : IIngredientService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;

        public IngredientService(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public int Add(int recipeId, CreateIngredientDto ingredientDto)
        {
            Recipe recipe = _context.Recipes
                .Include(r => r.Ingredients)
                .FirstOrDefault(r => r.Id == recipeId);
            if (recipe == null)
                throw new NotFoundException("Recipe not found");

            Ingredient ingredient = _mapper.Map<Ingredient>(ingredientDto);

            recipe.Ingredients.Add(ingredient);
            _context.SaveChanges();

            return ingredient.Id;
        }

        public void Delete(int id)
        {
            Ingredient ingredient = _context.Ingredients.FirstOrDefault(i => i.Id == id);
            if (ingredient == null)
                throw new NotFoundException("Ingredient not found");

            _context.Ingredients.Remove(ingredient);
            _context.SaveChanges();
        }
    }
}
