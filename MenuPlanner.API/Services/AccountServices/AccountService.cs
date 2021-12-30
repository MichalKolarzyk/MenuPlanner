using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.AccountServices
{
    public class AccountService : IAccountService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly AuthenticationSettings _authenticationSettings;

        public AccountService(MenuPlannerDbContext context,
            IMapper mapper, 
            IPasswordHasher<User> passwordHasher, 
            AuthenticationSettings authenticationSettings)
        {
            _context = context;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
            _authenticationSettings = authenticationSettings;
        }

        public void Register(CreateUserDto userDto)
        {
            User user = _mapper.Map<User>(userDto);

            string hashPassword = _passwordHasher.HashPassword(user, userDto.Password);
            user.PasswordHash = hashPassword;

            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public string GenerateToken(LoginDto loginDto)
        {
            User user = _context.Users.Include(u => u.Role).FirstOrDefault(u => u.Email == loginDto.Email);
            if (user == null)
                throw new BadRequestException("Invalid username or password");

            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, loginDto.Password);

            if (result == PasswordVerificationResult.Failed)
                throw new BadRequestException("Invalid username or password");

            List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, $"{user.FirstName} {user.LastName}"),
                new Claim(ClaimTypes.Role, $"{user.Role.Name}"),
                new Claim("DateOfBirth", user.DateOfBirth.Value.ToString("yyyy-MM-dd")),
            };
            if (!string.IsNullOrEmpty(user.Nationality))
                claims.Add(new Claim("Nationality", user.Nationality));


            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSettings.JwtExpireDays);

            var token = new JwtSecurityToken(
                _authenticationSettings.JwtIssuer,
                _authenticationSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred);

            var tokenHandler = new JwtSecurityTokenHandler();
            return tokenHandler.WriteToken(token);
        }

        public void ChangeRole(int userId, int newRoleId)
        {
            User user =_context.Users.FirstOrDefault(u => u.Id == userId);
            if (user == null)
                throw new NotFoundException("User not exists.");

            user.RoleId = newRoleId;
            _context.SaveChanges();
        }
    }
}
