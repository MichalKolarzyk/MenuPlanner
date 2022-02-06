using FluentValidation;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.DishTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Validators
{
    public class CreateDishTypeDtoValidator : AbstractValidator<CreateDishTypeDto>
    {
        private readonly MenuPlannerDbContext _dbContext;

        public CreateDishTypeDtoValidator(MenuPlannerDbContext dbContext)
        {
            _dbContext = dbContext;
            RuleFor(dt => dt.Name)
                .NotEmpty()
                .Custom(NameNotTaken);
                
            _dbContext = dbContext;
        }

        private void NameNotTaken(string value, ValidationContext<CreateDishTypeDto> context)
        {
            bool nameInUse = _dbContext.DishTypes.Any(r => r.Name == value);
            if (nameInUse)
                context.AddFailure("Dish type name is taken.");
        }
    }
}
