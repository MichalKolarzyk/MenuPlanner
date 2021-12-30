using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using Microsoft.EntityFrameworkCore;
using MenuPlanner.API.Models.Dishes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MenuPlanner.API.Services.HttpContextServices;

namespace MenuPlanner.API.Services
{
    public class DishService : IDishService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;
        private readonly IHttpContextService _httpContextService;

        public DishService(MenuPlannerDbContext context, 
            IMapper mapper,
            IHttpContextService httpContextService)
        {
            _context = context;
            _mapper = mapper;
            _httpContextService = httpContextService;
        }

        public int Create(CreateDishDto dishDto)
        {
            Dish dish = _mapper.Map<Dish>(dishDto);

            dish.UserId = _httpContextService.UserId;

            _context.Dishes.Add(dish);
            _context.SaveChanges();

            return dish.Id;
        }

        public DishDto Get(int id)
        {
            Dish dish = _context.Dishes
                .Include(d => d.Recipe)
                .FirstOrDefault(d => d.Id == id);

            if(dish == null)
                throw new NotFoundException("Dish not found");

            DishDto dishDto = _mapper.Map<DishDto>(dish);
            return dishDto;

        }

        public DishResponse Get(DishRequest request)
        {
            int? userId = _httpContextService.UserId;
            DateTime from = request.From;
            DateTime to = request.From.AddDays(request.Days);

            IEnumerable<Dish> dishes = _context.Dishes
                    .Where(d => d.UserId == userId)
                    .Where(d => d.Date >= from)
                    .Where(d => d.Date <= to)
                    .Include(d => d.Recipe);

            IEnumerable<DishDto> dishesDto = _mapper.Map<IEnumerable<DishDto>>(dishes);

            DishResponse dishResponse = new DishResponse();
            dishResponse.DishesDto = dishesDto.ToList();

            return dishResponse;
        }
    }
}
