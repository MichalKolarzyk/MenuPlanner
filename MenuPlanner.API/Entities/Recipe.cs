using System.Collections.Generic;

namespace MenuPlanner.API.Entities
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }


        public virtual List<Ingredient> Ingredients { get; set; }
    }
}