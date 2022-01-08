using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Units;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services
{
    public class UnitService : IUnitService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;

        public UnitService(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public int Create(CreateUnitDto unitDto)
        {
            Unit unit = _mapper.Map<Unit>(unitDto);

            _context.Units.Add(unit);
            _context.SaveChanges();

            return unit.Id;
        }

        public void Delete(int id)
        {
            Unit unit = _context.Units.FirstOrDefault(u => u.Id == id);
            if (unit == null)
                throw new NotFoundException("Unit not found");

            _context.Units.Remove(unit);
            _context.SaveChanges();
        }

        public UnitDto Get(int id)
        {
            Unit unit = _context.Units.FirstOrDefault(u => u.Id == id);
            if (unit == null)
                throw new NotFoundException("Unit not found");

            UnitDto unitDto = _mapper.Map<UnitDto>(unit);
            return unitDto;
        }

        public IEnumerable<UnitDto> GetAll()
        {
            IEnumerable<Unit> units = _context.Units;

            return _mapper.Map<IEnumerable<UnitDto>>(units);
        }
    }
}
