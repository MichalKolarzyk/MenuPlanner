using System.Collections.Generic;

namespace MenuPlanner.API.Entities
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? AuthorId { get; set; }
        public virtual User Author { get; set; }
        public virtual List<Ingredient> Ingredients { get; set; }
        public virtual List<Step> Setps { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
    }
}