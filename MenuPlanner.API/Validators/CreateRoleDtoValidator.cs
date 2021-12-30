using FluentValidation;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Role;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Validators
{
    public class CreateRoleDtoValidator : AbstractValidator<CreateRoleDto>
    {
        private readonly MenuPlannerDbContext _dbContext;

        public CreateRoleDtoValidator(MenuPlannerDbContext dbContext)
        {
            _dbContext = dbContext;

            RuleFor(role => role.Name)
                .NotEmpty()
                .Custom(NameNotTaken);
        }

        private void NameNotTaken(string value, ValidationContext<CreateRoleDto> context)
        {
            bool nameInUse = _dbContext.Roles.Any(r => r.Name == value);
            if (nameInUse == true)
                context.AddFailure("Name", "Role name is taken.");
        }
    }
}
