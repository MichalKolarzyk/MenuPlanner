using System.Security.Claims;

namespace MenuPlanner.API.Services.HttpContextServices
{
    public interface IHttpContextService
    {
        ClaimsPrincipal User { get; }
        int? UserId { get; }
    }
}