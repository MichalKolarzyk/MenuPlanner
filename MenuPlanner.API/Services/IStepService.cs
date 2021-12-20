using MenuPlanner.API.Models.Steps;

namespace MenuPlanner.API.Services
{
    public interface IStepService
    {
        int Create(int recipeId, CreateStepDto stepDto);
        void Delete(int id);
    }
}