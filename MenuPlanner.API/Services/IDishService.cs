using MenuPlanner.API.Models.Dishes;

namespace MenuPlanner.API.Services
{
    public interface IDishService
    {
        void Create(CreateDishDto dish);
    }
}