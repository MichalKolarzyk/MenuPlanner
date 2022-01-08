using MenuPlanner.API.Models.Dishes;

namespace MenuPlanner.API.Services
{
    public interface IDishService
    {
        int Create(CreateDishDto dish);
        DishResponse Get(DishRequest request);
        DishDto Get(int id);
    }
}