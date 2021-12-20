using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Recipes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services
{
    public class RecipeService : IRecipeService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;

        public RecipeService(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public int Create(CreateRecipeDto recipeDto)
        {
            Recipe recipe = _mapper.Map<Recipe>(recipeDto);
            recipe.AuthorId = 1;
            _context.Recipes.Add(recipe);
            _context.SaveChanges();

            return recipe.Id;
        }

        public RecipeDto Get(int id)
        {
            Recipe recipe = _context.Recipes
                .Include(r => r.Setps)
                .FirstOrDefault(r => r.Id == id);

            if (recipe == null)
                throw new NotFoundException("Recipe not found");

            RecipeDto recipeDto = _mapper.Map<RecipeDto>(recipe);

            return recipeDto;
        }



    }
}
