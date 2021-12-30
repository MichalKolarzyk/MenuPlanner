using MenuPlanner.API.Models.Users;

namespace MenuPlanner.API.Services.AccountServices
{
    public interface IAccountService
    {
        string GenerateToken(LoginDto loginDto);
        void Register(CreateUserDto userDto);
    }
}