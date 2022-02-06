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
            ExceptionResponse exceptionResponse = null;
            try
            {
                await next.Invoke(context);
            }
            catch (NotFoundException notFoundException)
            {
                exceptionResponse = notFoundException.GetResponse(context);
            }
            catch (BadRequestException badRequest)
            {
                exceptionResponse = badRequest.GetResponse(context);
            }
            catch (ForbiddenException forbiddenException)
            {
                exceptionResponse = forbiddenException.GetResponse(context);
            }
            catch (Exception e)
            {
                InternalException exception = new InternalException(e.Message, "Something went wrong");
                exceptionResponse = exception.GetResponse(context);
            }
            finally
            {
                if (exceptionResponse != null)
                {
                    context.Response.StatusCode = exceptionResponse.Status;
                    await context.Response.WriteAsJsonAsync(exceptionResponse);
                }
            }
        }
    }
}
