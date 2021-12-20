using MenuPlanner.API.Models.Recipes;
using MenuPlanner.API.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Dishes
{
    public class DishDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public float Portions { get; set; }
        public RecipeDto Recipe { get; set; }
        public UserDto User { get; set; }
    }
}
