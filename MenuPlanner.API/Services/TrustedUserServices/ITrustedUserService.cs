using MenuPlanner.API.Models.Users;
using System.Collections.Generic;

namespace MenuPlanner.API.Services.TrustedUserServices
{
    public interface ITrustedUserService
    {
        IEnumerable<UserDto> GetTrustedUsers(int userId);
        bool IsTrusted(int? otherUserId);
    }
}