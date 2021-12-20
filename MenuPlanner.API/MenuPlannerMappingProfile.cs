using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Dishes;
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
        }
    }
}
