using MenuPlanner.API.Models.Units;

namespace MenuPlanner.API.Services
{
    public interface IUnitService
    {
        int Create(CreateUnitDto unitDto);
        void Delete(int id);
    }
}