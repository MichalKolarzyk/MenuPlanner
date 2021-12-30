using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Role;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services
{
    public class RoleService : IRoleService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;

        public RoleService(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<RoleDto> GetAll()
        {
            Role[] roles = _context.Roles.ToArray();
            IEnumerable<RoleDto> rolesDto = _mapper.Map<IEnumerable<RoleDto>>(roles);

            return rolesDto;
        }

        public int Create(CreateRoleDto roleDto)
        {
            Role role = _mapper.Map<Role>(roleDto);

            _context.Roles.Add(role);
            _context.SaveChanges();

            return role.Id;
        }

        public void Delete(int roleId)
        {
            Role role = _context.Roles.FirstOrDefault(r => r.Id == roleId);
            if (role == null)
                throw new NotFoundException("Role not found");

            _context.Roles.Remove(role);
            _context.SaveChanges();
        }

    }
}
