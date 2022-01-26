﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Exceptions
{
    public class BadRequestException : HttpExceptionBase
    {
        public BadRequestException(string message, string details = "details not found.") : base(message, details)
        {
        }

        public override ExceptionResponse GetResponse(HttpContext context)
        {
            return new ExceptionResponse
            {
                Message = Message,
                Detail = Details,
                Error = "Bad request exception",
                Path = context.Request.Path,
                Status = 400,
            };
        }
    }
}
