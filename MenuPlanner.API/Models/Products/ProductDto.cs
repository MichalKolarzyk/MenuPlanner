﻿using MenuPlanner.API.Models.Units;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Products
{
    public class ProductDto
    {
        public int Id { get; set; }
        public virtual UnitDto Unit { get; set; }
        public float KcalPerUnit { get; set; }
    }
}