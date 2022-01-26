using MenuPlanner.API.Models.Users;
using MenuPlanner.API.Services.AccountServices;
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
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        /// <summary>
        /// Rejestrstracja nowego użytkownika.
        /// </summary>
        [HttpPost("register")]
        public ActionResult RegisterUser([FromBody] CreateUserDto userDto)
        {
            _accountService.Register(userDto);
            return Ok();
        }

        /// <summary>
        /// Logowanie istniejącego użytkownika.
        /// </summary>
        /// <param name="loginDto"></param>
        /// <returns></returns>
        [HttpPost("login")]
        public ActionResult<LoginResponse> Login([FromBody] LoginDto loginDto)
        {
            LoginResponse loginResponse = _accountService.GenerateToken(loginDto);
            return Ok(loginResponse);
        }

        /// <summary>
        /// Zmiana roli użytkownika. (Admin)
        /// </summary>
        /// <param name="userId">Id użytkownika którego rola ma zostać zmieniona</param>
        /// <param name="newRoleId">Id nowej roli</param>
        /// <returns></returns>
        [HttpPut("role")]
        [Authorize(Roles ="Admin")]
        public ActionResult ChangeRole([FromQuery] int userId,[FromQuery] int newRoleId)
        {
            _accountService.ChangeRole(userId, newRoleId);
            return Ok();
        }

        /// <summary>
        /// Pobierz dane użytkownika.
        /// </summary>
        /// <param name="token">token</param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<UserDto> GetUser([FromQuery] string token)
        {
            UserDto userDto = _accountService.GetUser(token);
            return userDto;
        }

    }
}
