using MenuPlanner.API.Models.Ingredients;
using MenuPlanner.API.Models.Steps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Recipes
{
    public class RecipeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual List<IngredientDto> Ingredients { get; set; }
        public virtual List<StepDto> Setps { get; set; }
    }
}
