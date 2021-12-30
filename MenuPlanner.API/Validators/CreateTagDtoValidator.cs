using FluentValidation;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Tags;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Validators
{
    public class CreateTagDtoValidator : AbstractValidator<CreateTagDto>
    {
        private readonly MenuPlannerDbContext _dbContext;

        public CreateTagDtoValidator(MenuPlannerDbContext dbContext)
        {
            _dbContext = dbContext;

            RuleFor(tag => tag.Description)
                .NotEmpty()
                .Custom(DescriptionNotTaken);
        }

        private void DescriptionNotTaken(string value, ValidationContext<CreateTagDto> context)
        {
            bool descriptionInUse = _dbContext.Tags.Any(r => r.Description == value);
            if (descriptionInUse == true)
                context.AddFailure("Description", "Description name is taken.");
        }
    }
}
