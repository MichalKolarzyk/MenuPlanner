using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Users;
using MenuPlanner.API.Services.HttpContextServices;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.TrustedUserServices
{
    public class TrustedUserService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IHttpContextService _httpContextService;
        private readonly IMapper _mapper;

        public TrustedUserService(MenuPlannerDbContext context, IHttpContextService httpContextService, IMapper mapper)
        {
            _context = context;
            _httpContextService = httpContextService;
            _mapper = mapper;
        }

        public bool IsTrusted(int otherUserId)
        {
            int? userId = _httpContextService.UserId;
            bool trustedByYou = _context.TrustedUsers.Any(rel => rel.UserId == userId && rel.TrustedId == otherUserId);
            bool youTrustedByHim = _context.TrustedUsers.Any(rel => rel.UserId == otherUserId && rel.TrustedId == userId);
            bool result = trustedByYou && youTrustedByHim;
            return result;
        }


        public IEnumerable<UserDto> GetTrustedUsers(int userId)
        {
            IEnumerable<User> invitedUsers = _context.TrustedUsers
                .Include(rel => rel.Trusted)
                .Where(rel => rel.UserId == userId)
                .Select(rel => rel.Trusted);

            IEnumerable<User> trustedUsers = invitedUsers.Where(u => IsTrusted(u.Id));
            IEnumerable<UserDto> trustedUsersDto = _mapper.Map<IEnumerable<UserDto>>(trustedUsers);

            return trustedUsersDto;
        }
    }
}
