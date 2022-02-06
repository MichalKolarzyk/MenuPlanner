using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Attributes
{
    public class ViewerAuthAttribute : AuthorizeAttribute
    {
        public ViewerAuthAttribute() : base("Viewer")
        {
        }
    }
}
