using MenuPlanner.API.Models.Units;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MenuPlanner.API.Services
{
    public interface IUnitService
    {
        int Create(CreateUnitDto unitDto);
        void Delete(int id);
        IEnumerable<UnitDto> GetAll();
        UnitDto Get(int id);
    }
}