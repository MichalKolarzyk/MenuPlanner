using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Entities
{
    public class Tag
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Recipe> Recipes { get; set; }
    }
}
