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
using MenuPlanner.API.Services.TrustedUserServices;

namespace MenuPlanner.API.Services
{
    public class DishService : IDishService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;
        private readonly IHttpContextService _httpContextService;
        private readonly ITrustedUserService _trustedUserService;

        public DishService(MenuPlannerDbContext context,
            IMapper mapper,
            IHttpContextService httpContextService,
            ITrustedUserService trustedUserService)
        {
            _context = context;
            _mapper = mapper;
            _httpContextService = httpContextService;
            _trustedUserService = trustedUserService;
        }

        public int Create(CreateDishDto dishDto)
        {
            Dish dish = _mapper.Map<Dish>(dishDto);

            if (dishDto.TrustedUserId == null || dishDto.TrustedUserId == 0)
            {
                dish.UserId = _httpContextService.UserId;
            }
            else if (_trustedUserService.IsTrusted(dishDto.TrustedUserId))
            {
                dish.UserId = dishDto.TrustedUserId;
            }
            else
            {
                throw new BadRequestException("This user is not trusted.");
            }
            
            _context.Dishes.Add(dish);
            _context.SaveChanges();

            return dish.Id;
        }

        public void Delete(int dishId)
        {
            Dish dish = _context.Dishes
                .FirstOrDefault(d => d.Id == dishId);
            if (dish == null)
                throw new NotFoundException("Dish not found.");

            int? currentUserId = _httpContextService.UserId;
            if (dish.UserId != currentUserId && _trustedUserService.IsTrusted(dish.UserId) == false)
                throw new ForbiddenException("Current user can't delete this dish");

            _context.Dishes.Remove(dish);
            _context.SaveChanges();
        }

        public DishDto Get(int id)
        {
            Dish dish = _context.Dishes
                .Include(d => d.Recipe)
                .FirstOrDefault(d => d.Id == id);

            if (dish == null)
                throw new NotFoundException("Dish not found.");

            DishDto dishDto = _mapper.Map<DishDto>(dish);
            return dishDto;

        }

        public DishResponse Get(DishRequest request)
        {
            List<int?> userIds = request.UsersIds;
            if (userIds.Count == 0)
            {
                userIds.Add(_httpContextService.UserId);
            }
            else
            {
                bool someUserNotTrusted = userIds.Any(id => _trustedUserService.IsTrusted(id) == false);
                if (someUserNotTrusted)
                    throw new BadRequestException("Not all users are trusted");
            }
            DateTime from = request.From;
            DateTime to = request.From.AddDays(request.Days);

            IEnumerable<Dish> dishes = _context.Dishes
                    .Where(d => userIds.Contains(d.UserId))
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
