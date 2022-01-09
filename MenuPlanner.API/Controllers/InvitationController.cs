using MenuPlanner.API.Services.InvitationServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvitationController : Controller
    {
        private readonly IInvitationService _invitationService;

        public InvitationController(IInvitationService invitationService)
        {
            _invitationService = invitationService;
        }

        [HttpPost("invite")]
        [Authorize("Viewer")]
        public ActionResult Invite([FromQuery] string email)
        {
            _invitationService.Invite(email);
            return Ok();
        }

        [HttpPost("accept")]
        [Authorize("Viewer")]
        public ActionResult AcceptInvitation([FromQuery] int id)
        {
            _invitationService.AcceptInvitation(id);
            return Ok();
        }

        [HttpDelete("reject")]
        [Authorize("Viewer")]
        public ActionResult RejectInvitation([FromQuery] int id)
        {
            _invitationService.RejectInvitation(id);
            return NoContent();
        }
    }
}
