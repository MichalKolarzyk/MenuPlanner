using MenuPlanner.API.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Dishes
{
    public class DishRequest
    {
        public DateTime From { get; set; }
        public int Days { get; set; }
    }
}
