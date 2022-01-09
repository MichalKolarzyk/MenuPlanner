using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Services.HttpContextServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.InvitationServices
{
    public class InvitationService : IInvitationService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IHttpContextService _httpContextService;

        public InvitationService(MenuPlannerDbContext context, IHttpContextService httpContextService)
        {
            _context = context;
            _httpContextService = httpContextService;
        }

        public void Invite(string email)
        {
            int? userId = _httpContextService.UserId;
            User InvitedUser = _context.Users.FirstOrDefault(u => u.Email == email);
            if (InvitedUser == null)
                throw new BadRequestException("User with this email does not exist");

            if (InvitedUser.Id == userId)
                throw new BadRequestException("User and invited user has the same id");

            int? invitedUserId = InvitedUser.Id;
            bool invitationExists = _context.TrustedUsers.Any(rel => rel.UserId == userId && rel.TrustedId == invitedUserId);
            if (invitationExists)
                throw new BadRequestException("You have already send invitation to this user");

            TrustedUser trustedUser = new TrustedUser
            {
                TrustedId = invitedUserId,
                UserId = userId,
            };

            _context.Add(trustedUser);
            _context.SaveChanges();
        }

        public void RejectInvitation(int rejectedUserId)
        {
            int? userId = _httpContextService.UserId;

            TrustedUser rejectedUser = _context.TrustedUsers.FirstOrDefault(rel => rel.UserId == rejectedUserId && rel.TrustedId == userId);
            if (rejectedUser == null)
                throw new BadRequestException("You have no invitation from this user");

            if (rejectedUser.Id == userId)
                throw new BadRequestException("User and invited user has the same id");

            _context.Remove(rejectedUser);
            _context.SaveChanges();
        }

        public void AcceptInvitation(int invitingUserId)
        {
            int? userId = _httpContextService.UserId;

            bool invitationExists = _context.TrustedUsers.Any(rel => rel.UserId == invitingUserId && rel.TrustedId == userId);
            if (invitationExists == false)
                throw new BadRequestException("You have no invitation from this user");

            TrustedUser trustedUser = new TrustedUser
            {
                UserId = userId,
                TrustedId = invitingUserId,
            };

            _context.Add(trustedUser);
            _context.SaveChanges();
        }
    }
}
