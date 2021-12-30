using FluentValidation;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Validators
{
    public class RegisterUserDtoValidator : AbstractValidator<CreateUserDto>
    {
        private readonly MenuPlannerDbContext _dbContext;

        public RegisterUserDtoValidator(MenuPlannerDbContext dbContext)
        {
            _dbContext = dbContext;

            RuleFor(x => x.Email)
                .NotEmpty()
                .EmailAddress()
                .Custom(EmailIsNotTaken);

            RuleFor(x => x.Password)
                .MinimumLength(6);

            RuleFor(x => x.ConfirmPassword)
                .Equal(x => x.Password);
        }

        private void EmailIsNotTaken(string value, ValidationContext<CreateUserDto> context)
        {
            bool emailInUse = _dbContext.Users.Any(u => u.Email == value);
            if (emailInUse)
            {
                context.AddFailure("Email", "That email is taken");
            }
        }
    }
}
