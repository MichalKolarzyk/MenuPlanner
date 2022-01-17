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

        /// <summary>
        /// Zaproś użytkownika
        /// </summary>
        /// <param name="email">Adres email użytkownika</param>
        /// <returns></returns>
        [HttpPost("invite")]
        [Authorize("Viewer")]
        public ActionResult Invite([FromQuery] string email)
        {
            _invitationService.Invite(email);
            return Ok();
        }

        /// <summary>
        /// Zaakceptuj zaproszenie
        /// </summary>
        /// <param name="id">Id zaproszenia</param>
        /// <returns></returns>
        [HttpPost("accept")]
        [Authorize("Viewer")]
        public ActionResult AcceptInvitation([FromQuery] int id)
        {
            _invitationService.AcceptInvitation(id);
            return Ok();
        }

        /// <summary>
        /// Odżuć zaproszenie
        /// </summary>
        /// <param name="id">Id zaproszenia</param>
        /// <returns></returns>
        [HttpDelete("reject")]
        [Authorize("Viewer")]
        public ActionResult RejectInvitation([FromQuery] int id)
        {
            _invitationService.RejectInvitation(id);
            return NoContent();
        }
    }
}
