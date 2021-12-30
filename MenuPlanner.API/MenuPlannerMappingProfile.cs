using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Dishes;
using MenuPlanner.API.Models.Ingredients;
using MenuPlanner.API.Models.Products;
using MenuPlanner.API.Models.Recipes;
using MenuPlanner.API.Models.Role;
using MenuPlanner.API.Models.Steps;
using MenuPlanner.API.Models.Tags;
using MenuPlanner.API.Models.Units;
using MenuPlanner.API.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API
{
    public class MenuPlannerMappingProfile : Profile
    {
        public MenuPlannerMappingProfile()
        {
            CreateMap<CreateDishDto, Dish>();
            CreateMap<Dish, DishDto>();

            CreateMap<CreateProductDto, Product>();
            CreateMap<Product, ProductDto>();

            CreateMap<CreateRecipeDto, Recipe>();
            CreateMap<Recipe, RecipeDto>();

            CreateMap<CreateStepDto, Step>();
            CreateMap<Step, StepDto>();

            CreateMap<CreateUnitDto, Unit>();
            CreateMap<Unit, UnitDto>();

            CreateMap<CreateTagDto, Tag>();
            CreateMap<UpdateTagDto, Tag>();
            CreateMap<Tag, TagDto>();

            CreateMap<CreateRoleDto, Role>();
            CreateMap<Role, RoleDto>();

            CreateMap<CreateUserDto, User>();
            CreateMap<User, UserDto>();


            CreateMap<CreateIngredientDto, Ingredient>();
            CreateMap<Ingredient, IngredientDto>();
            
        }
    }
}
