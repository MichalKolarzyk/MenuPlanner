using MenuPlanner.API.Exceptions;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Middleware
{
    public class ErrorHandlingMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next.Invoke(context);
            }
            catch (NotFoundException notFoundException)
            {
                ExceptionResponse exceptionResponse = notFoundException.GetResponse(context);
                context.Response.StatusCode = exceptionResponse.Status;
                await context.Response.WriteAsJsonAsync(exceptionResponse);
            }
            catch (BadRequestException badRequest)
            {
                ExceptionResponse exceptionResponse = badRequest.GetResponse(context);
                context.Response.StatusCode = exceptionResponse.Status;
                await context.Response.WriteAsJsonAsync(exceptionResponse);
            }
            catch(ForbiddenException forbiddenException)
            {
                ExceptionResponse exceptionResponse = forbiddenException.GetResponse(context);
                context.Response.StatusCode = exceptionResponse.Status;
                await context.Response.WriteAsJsonAsync(exceptionResponse);
            }
            catch (Exception e)
            {
                InternalException exception = new InternalException(e.Message, "Something went wrong");
                ExceptionResponse exceptionResponse = exception.GetResponse(context);
                context.Response.StatusCode = exceptionResponse.Status;
                await context.Response.WriteAsJsonAsync(exceptionResponse);
            }
        }
    }
}
