using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Exceptions
{
    public class ForbiddenException : HttpExceptionBase
    {
        public ForbiddenException(string message, string details = "details not found.") : base(message, details)
        {
        }

        public override ExceptionResponse GetResponse(HttpContext context)
        {
            return new ExceptionResponse
            {
                Message = Message,
                Detail = Details,
                Error = "Forbidden request exception",
                Path = context.Request.Path,
                Status = 403,
            };
        }
    }
}
