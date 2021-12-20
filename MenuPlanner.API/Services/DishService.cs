using AutoMapper;
using MenuPlanner.API.Entities;
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

        public void Create(CreateDishDto dishDto)
        {
            Dish dish = _mapper.Map<Dish>(dishDto);

            _context.Dishes.Add(dish);
            _context.SaveChanges();
        }

        public DishDto Get(int id)
        {
            Dish dish = _context.Dishes.FirstOrDefault(d => d.Id == id);

            if(dish == null)
                throw new Exception("dish not found");

            DishDto dishDto = _mapper.Map<DishDto>(dish);
            return dishDto;

        }
    }
}
