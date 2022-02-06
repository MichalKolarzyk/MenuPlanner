using MenuPlanner.API.Models.DishTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.DishTypeServices
{
    public interface IDishTypeService
    {
        IEnumerable<DishTypeDto> GetAll();
        DishTypeDto Get(int? id);
        int Create(CreateDishTypeDto createDishDto);
    }
}
