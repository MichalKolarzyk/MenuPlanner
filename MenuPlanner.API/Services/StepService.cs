using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Steps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services
{
    public class StepService : IStepService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;

        public StepService(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public int Create(int recipeId, CreateStepDto stepDto)
        {
            Step step = _mapper.Map<Step>(stepDto);
            Recipe recipe = _context.Recipes.FirstOrDefault(r => r.Id == recipeId);

            if (recipe == null)
                throw new NotFoundException("Recipe not found");

            step.RecipeId = recipeId;

            _context.Steps.Add(step);
            _context.SaveChanges();

            return step.Id;
        }
        
        
        public void Delete(int id)
        {
            Step step =_context.Steps.FirstOrDefault(s => s.Id == id);

            if (step == null)
                throw new NotFoundException("Step not found");

            _context.Steps.Remove(step);
            _context.SaveChanges();
        }

    }
}
