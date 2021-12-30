using MenuPlanner.API.Models.Dishes;

namespace MenuPlanner.API.Services
{
    public interface IDishService
    {
        int Create(CreateDishDto dish);
        DishDto Get(int id);
    }
}