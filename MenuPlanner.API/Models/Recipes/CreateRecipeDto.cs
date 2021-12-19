using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Recipes
{
    public class CreateRecipeDto
    {
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
