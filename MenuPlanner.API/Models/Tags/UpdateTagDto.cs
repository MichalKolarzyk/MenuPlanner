using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Models.Tags
{
    public class UpdateTagDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
    }
}
