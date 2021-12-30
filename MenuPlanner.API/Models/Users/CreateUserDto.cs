using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Users
{
    public class CreateUserDto
    {
        public string Email { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Nationality { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
