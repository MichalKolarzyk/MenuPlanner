using FluentValidation;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Dishes;
using MenuPlanner.API.Models.DishTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Validators
{
    public class CreateDishDtoValidator : AbstractValidator<CreateDishDto>
    {
        private readonly MenuPlannerDbContext _dbContext;

        public CreateDishDtoValidator(MenuPlannerDbContext dbContext)
        {
            _dbContext = dbContext;
            RuleFor(dt => dt.DishTypeId)
                .NotEmpty()
                .NotNull()
                .Custom(Exsits);

            _dbContext = dbContext;
        }

        private void Exsits(int? id, ValidationContext<CreateDishDto> context)
        {
            bool result = _dbContext.DishTypes.Any(dt => dt.Id == id.Value);
            if (result == false)
                context.AddFailure($"DataType with id: {id.Value} does not exsits.");
        }
    }
}