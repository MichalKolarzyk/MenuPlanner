using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Entities
{
    public class TrustedUser
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public virtual User User { get; set; }
        public int? TrustedId { get; set; }
        public virtual User Trusted { get; set; }
    }
}
