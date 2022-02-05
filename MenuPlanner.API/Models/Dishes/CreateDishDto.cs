using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Dishes
{
    public class CreateDishDto
    {
        [Required]
        public int RecipeId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [DefaultValue(1)]
        public float Portions { get; set; }

        [DefaultValue(null)]
        public int? TrustedUserId { get; set; }

        [Required]
        public int? DishTypeId { get; set; }
    }
}
