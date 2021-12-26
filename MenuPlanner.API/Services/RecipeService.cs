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
                .Include(r => r.Ingredients)
                .Include(r => r.Tags)
                .FirstOrDefault(r => r.Id == id);

            if (recipe == null)
                throw new NotFoundException("Recipe not found");


            RecipeDto recipeDto = _mapper.Map<RecipeDto>(recipe);

            return recipeDto;
        }

        public void AddTag(int recipeId, int tagId)
        {
            Tag tag = GetTag(tagId);

            Recipe recipe = GetRecipe(recipeId);

            recipe.Tags.Add(tag);
            _context.SaveChanges();
        }

        public void RemoveTag(int recipeId, int tagId)
        {
            Tag tag = GetTag(tagId);

            Recipe recipe = GetRecipe(recipeId);

            recipe.Tags.Remove(tag);
            _context.SaveChanges();
        }

        private Tag GetTag(int tagId)
        {
            Tag tag = _context.Tags.FirstOrDefault(t => t.Id == tagId);
            if (tag == null)
                throw new NotFoundException("tag not found");
            return tag;
        }

        private Recipe GetRecipe(int recipeId)
        {
            Recipe recipe = _context.Recipes
                .Include(r => r.Tags)
                .FirstOrDefault(r => r.Id == recipeId);
            if (recipe == null)
                throw new NotFoundException("recipe not found");
            return recipe;
        }
    }
}
