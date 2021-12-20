using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Dishes
{
    public class CreateDishDto
    {
        public int RecipeId { get; set; }
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public float Portions { get; set; }
    }
}
