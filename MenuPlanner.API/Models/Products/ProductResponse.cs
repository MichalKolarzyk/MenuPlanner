using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Products
{
    public class ProductResponse
    {
        public IEnumerable<ProductDto> Products { get; set; }
    }
}
