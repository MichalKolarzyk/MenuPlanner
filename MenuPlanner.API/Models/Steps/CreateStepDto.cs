using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Steps
{
    public class CreateStepDto
    {
        public int Position { get; set; }
        public string Description { get; set; }
    }
}
