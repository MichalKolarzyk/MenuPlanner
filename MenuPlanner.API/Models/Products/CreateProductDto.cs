using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Products
{
    public class CreateProductDto
    {
        public int UnitId { get; set; }
        public float KcalPerUnit { get; set; }
    }
}
