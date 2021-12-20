using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Dishes;
using MenuPlanner.API.Models.Recipes;
using MenuPlanner.API.Models.Steps;
using MenuPlanner.API.Models.Units;
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

            CreateMap<CreateRecipeDto, Recipe>();
            CreateMap<Recipe, RecipeDto>();

            CreateMap<CreateStepDto, Step>();
            CreateMap<Step, StepDto>();

            CreateMap<CreateUnitDto, Unit>();
            CreateMap<Unit, UnitDto>();

        }
    }
}
