using FluentValidation;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Validators
{
    public class CreateProductDtoValidator : AbstractValidator<CreateProductDto>
    {
        private readonly MenuPlannerDbContext _dbContext;

        public CreateProductDtoValidator(MenuPlannerDbContext dbContext)
        {
            _dbContext = dbContext;
            RuleFor(p => p.Name)
                .NotEmpty()
                .Custom(NameNotTaken);
        }

        private void NameNotTaken(string value, ValidationContext<CreateProductDto> context)
        {
            bool nameInUse = _dbContext.Products.Any(r => r.Name == value);
            if (nameInUse == true)
                context.AddFailure("Name", "Role name is taken.");
        }
    }
}
