using MenuPlanner.API.Models.Users;

namespace MenuPlanner.API.Services.AccountServices
{
    public interface IAccountService
    {
        LoginResponse GenerateToken(LoginDto loginDto);
        void Register(CreateUserDto userDto);
        void ChangeRole(int userId, int newRoleId);
    }
}