using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Users
{
    public class LoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
