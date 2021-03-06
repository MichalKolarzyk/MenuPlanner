using AutoMapper;
using MenuPlanner.API.Abstracts;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Recipes;
using MenuPlanner.API.Models.Tags;
using MenuPlanner.API.Services.HttpContextServices;
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
        private readonly IHttpContextService _httpContextService;

        public RecipeService(MenuPlannerDbContext context, IMapper mapper, IHttpContextService httpContextService)
        {
            _context = context;
            _mapper = mapper;
            _httpContextService = httpContextService;
        }

        public int Create(CreateRecipeDto recipeDto)
        {
            Recipe recipe = _mapper.Map<Recipe>(recipeDto);
            recipe.AuthorId = _httpContextService.UserId;
            _context.Recipes.Add(recipe);
            _context.SaveChanges();

            return recipe.Id;
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
                throw new NotFoundException("Tag not found");
            return tag;
        }

        public PagedResponse<RecipeDto> Get(RecipeRequest request)
        {
            var baseQuery = _context.Recipes
                .Include(r => r.Tags)
                .Where(r => r.Name.ToLower().Contains(request.SearchPhrase));

            var recipes = baseQuery
                .Skip(request.PageSize * (request.PageNumber - 1))
                .Take(request.PageSize)
                .ToList();

            int totalItemCount = baseQuery.Count();
            var recipeDtos = _mapper.Map<List<RecipeDto>>(recipes);

            var response = new PagedResponse<RecipeDto>(recipeDtos, totalItemCount, request.PageSize, request.PageNumber);
            return response;
        }
        public RecipeDto Get(int id)
        {
            Recipe recipe = _context.Recipes
                .Include(r => r.Tags)
                .Include(r => r.Ingredients)
                .Include(r => r.Setps)
                .FirstOrDefault(r => r.Id == id);
            if (recipe == null)
                throw new NotFoundException("Recipe not found.");

            RecipeDto recipeDto = _mapper.Map<RecipeDto>(recipe);
            return recipeDto;
        }


        private Recipe GetRecipe(int recipeId)
        {
            Recipe recipe = _context.Recipes
                .Include(r => r.Tags)
                .FirstOrDefault(r => r.Id == recipeId);
            if (recipe == null)
                throw new NotFoundException("Recipe not found.");
            return recipe;
        }

        public void Delete(int recipeId)
        {
            int? currentUserId = _httpContextService.UserId;

            if (currentUserId == null)
                return;

            Recipe recipe = _context.Recipes
                .FirstOrDefault(r => r.Id == recipeId);

            if (recipe == null)
                throw new NotFoundException("Recipe not found.");

            if (currentUserId != recipe.AuthorId)
                throw new ForbiddenException("Current user is not an author of this recipe.");

            _context.Recipes.Remove(recipe);
            _context.SaveChanges();
        }

        public IEnumerable<TagDto> GetTags(int recipeId)
        {
            Recipe recipe = _context.Recipes
                .Include(r => r.Tags)
                .FirstOrDefault(r => r.Id == recipeId);

            if (recipe == null)
                throw new NotFoundException("Recipe not found.");

            IEnumerable<Tag> tags = recipe.Tags;
            IEnumerable<TagDto> tagDtos = _mapper.Map<IEnumerable<TagDto>>(tags);
            return tagDtos;
        }
    }
}
