using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Ingredients
{
    public class CreateIngredientDto
    {
        public int DishId { get; set; }
        public int ProductId { get; set; }
        public float Quantity { get; set; }
    }
}
