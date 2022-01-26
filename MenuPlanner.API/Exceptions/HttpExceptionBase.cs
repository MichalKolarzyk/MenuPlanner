using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Exceptions
{
    public abstract class HttpExceptionBase : Exception
    {

        public string Details { get; set; }
        public HttpExceptionBase(string message, string details = "details not found.") : base(message)
        {
            Details = details;
        }

        public abstract ExceptionResponse GetResponse(HttpContext context);
    }
}
