using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.DishTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.DishTypeServices
{
    public class DishTypeService : IDishTypeService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;

        public DishTypeService(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public int Create(CreateDishTypeDto createDishTypeDto)
        {
            DishType dish = _mapper.Map<DishType>(createDishTypeDto);
            _context.Add(dish);
            _context.SaveChanges();

            return dish.Id;
        }

        public DishTypeDto Get(int? id)
        {
            DishType dishType = _context.DishTypes.FirstOrDefault(d => d.Id == id);
            if (dishType == null)
                throw new NotFoundException($"Dish type with Id: {id} not found");

            DishTypeDto dishTypeDto = _mapper.Map<DishTypeDto>(dishType);
            return dishTypeDto;
        }

        public IEnumerable<DishTypeDto> GetAll()
        {
            IEnumerable<DishType> dishTypes =_context.DishTypes;
            IEnumerable<DishTypeDto> dishTypeDtos = _mapper.Map<IEnumerable<DishTypeDto>>(dishTypes);

            return dishTypeDtos;
        }
    }
}
