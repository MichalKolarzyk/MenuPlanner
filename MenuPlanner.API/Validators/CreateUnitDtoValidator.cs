using FluentValidation;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Units;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Validators
{
    public class CreateUnitDtoValidator : AbstractValidator<CreateUnitDto>
    {
        private readonly MenuPlannerDbContext _dbContext;

        public CreateUnitDtoValidator(MenuPlannerDbContext dbContext)
        {
            _dbContext = dbContext;
            RuleFor(u => u.Description)
                .NotEmpty();

            RuleFor(u => u.Symbol)
                .Custom(SymbolNotTaken);
        }

        private void SymbolNotTaken(string value, ValidationContext<CreateUnitDto> context)
        {
            bool symbolInUse = _dbContext.Units.Any(u => u.Symbol == value);
            if (symbolInUse == true)
                context.AddFailure("Symbol", "Symbol name is taken.");
        }
    }
}
