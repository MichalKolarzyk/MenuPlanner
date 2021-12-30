using MenuPlanner.API.Models.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Ingredients
{
    public class IngredientDto
    {
        public int Id { get; set; }
        public float Quantity { get; set; }
        public string ProductName { get; set; }
        public int ProductId { get; set; }
    }
}
