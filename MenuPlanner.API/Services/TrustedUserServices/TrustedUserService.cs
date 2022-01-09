using MenuPlanner.API.Entities;
using MenuPlanner.API.Services.HttpContextServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.TrustedUserServices
{
    public class TrustedUserService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IHttpContextService _httpContextService;

        public TrustedUserService(MenuPlannerDbContext context, IHttpContextService httpContextService)
        {
            _context = context;
            _httpContextService = httpContextService;
        }



    }
}
