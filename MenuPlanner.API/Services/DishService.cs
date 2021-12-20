using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Dishes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services
{
    public class DishService : IDishService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;

        public DishService(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public int Create(CreateDishDto dishDto)
        {
            Dish dish = _mapper.Map<Dish>(dishDto);

            _context.Dishes.Add(dish);
            _context.SaveChanges();

            return dish.Id;
        }

        public DishDto Get(int id)
        {
            Dish dish = _context.Dishes.FirstOrDefault(d => d.Id == id);

            if(dish == null)
                throw new NotFoundException("Dish not found");

            DishDto dishDto = _mapper.Map<DishDto>(dish);
            return dishDto;

        }
    }
}
