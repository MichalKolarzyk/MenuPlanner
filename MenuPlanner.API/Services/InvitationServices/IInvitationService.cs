namespace MenuPlanner.API.Services.InvitationServices
{
    public interface IInvitationService
    {
        void AcceptInvitation(int invitingUserId);
        void Invite(string email);
        void RejectInvitation(int rejectedUserId);
    }
}