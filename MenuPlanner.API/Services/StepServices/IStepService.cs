using MenuPlanner.API.Models.Steps;
using System.Collections.Generic;

namespace MenuPlanner.API.Services
{
    public interface IStepService
    {
        int Create(int recipeId, CreateStepDto stepDto);
        void Delete(int recipeId, int id);
        StepDto Get(int recipeId, int id);
        IEnumerable<StepDto> Get(int recipeId);
    }
}