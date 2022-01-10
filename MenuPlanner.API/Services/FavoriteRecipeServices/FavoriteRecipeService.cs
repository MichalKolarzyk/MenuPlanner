using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Recipes;
using MenuPlanner.API.Services.HttpContextServices;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.FavoriteRecipeServices
{
    public class FavoriteRecipeService : IFavoriteRecipeService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IHttpContextService _httpContextService;
        private readonly IMapper _mapper;

        public FavoriteRecipeService(MenuPlannerDbContext context,
            IHttpContextService httpContextService,
            IMapper mapper)
        {
            _context = context;
            _httpContextService = httpContextService;
            _mapper = mapper;
        }

        public void Create(int recipeId)
        {
            int? userId = _httpContextService.UserId;

            bool exist = _context.FavoriteRecipes.Any(fr => fr.UserId == userId && fr.RecipeId == recipeId);
            if (exist == true)
                throw new BadRequestException("Recipe is already favorite");

            FavoriteRecipe favoriteRecipe = new FavoriteRecipe
            {
                RecipeId = recipeId,
                UserId = userId,
            };

            _context.FavoriteRecipes.Add(favoriteRecipe);
            _context.SaveChanges();
        }

        public void Remove(int recipeId)
        {
            int? userId = _httpContextService.UserId;
            FavoriteRecipe favoriteRecipe = _context.FavoriteRecipes
                .FirstOrDefault(fr => fr.RecipeId == recipeId && fr.UserId == userId);

            if (favoriteRecipe == null)
                throw new NotFoundException("Favorite recipe not found");

            _context.Remove(favoriteRecipe);
            _context.SaveChanges();
        }

        IEnumerable<RecipeDto> IFavoriteRecipeService.Get()
        {
            int? userId = _httpContextService.UserId;
            IEnumerable<Recipe> recipes = _context.FavoriteRecipes
                .Where(fr => fr.UserId == userId)
                .Include(fr => fr.Recipe)
                .Select(fr => fr.Recipe);

            IEnumerable<RecipeDto> recipeDtos = _mapper.Map<IEnumerable<RecipeDto>>(recipes);

            return recipeDtos;
        }
    }
}
