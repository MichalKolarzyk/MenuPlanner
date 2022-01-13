﻿using MenuPlanner.API.Models.Users;
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
        /// Rejestrstracja nowego użytkownika
        /// </summary>
        [HttpPost("register")]
        public ActionResult RegisterUser([FromBody] CreateUserDto userDto)
        {
            _accountService.Register(userDto);
            return Ok();
        }

        /// <summary>
        /// Logowanie istniejącego użytkownika
        /// </summary>
        /// <param name="loginDto"></param>
        /// <returns></returns>
        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginDto loginDto)
        {
            string token = _accountService.GenerateToken(loginDto);
            return Ok(token);
        }

        /// <summary>
        /// Zmiana roli użytkownika.
        /// </summary>
        /// <param name="userId">Id użytkownika którego rola ma zostać zmieniona</param>
        /// <param name="newRoleId">Id nowej roli</param>
        /// <returns></returns>
        /// <remarks>
        /// Rola: Admin
        /// </remarks>
        [HttpPut("role")]
        [Authorize(Roles ="Admin")]
        public ActionResult ChangeRole([FromQuery] int userId,[FromQuery] int newRoleId)
        {
            _accountService.ChangeRole(userId, newRoleId);
            return Ok();
        }

    }
}
