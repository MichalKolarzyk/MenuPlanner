using MenuPlanner.API.Models.Role;
using System.Collections.Generic;

namespace MenuPlanner.API.Services
{
    public interface IRoleService
    {
        int Create(CreateRoleDto roleDto);
        void Delete(int roleId);
        IEnumerable<RoleDto> GetAll();
    }
}