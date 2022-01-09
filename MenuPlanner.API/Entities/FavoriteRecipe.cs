using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Entities
{
    public class FavoriteRecipe
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public virtual User User { get; set; }
        public int? RecipeId { get; set; }
        public virtual Recipe Recipe { get; set; }
    }
}
