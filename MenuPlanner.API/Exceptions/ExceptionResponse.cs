using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Exceptions
{
    public class ExceptionResponse 
    {
        public int Status { get; set; }
        public string Error { get; set; }
        public string Message { get; set; }
        public string Detail { get; set; }
        public string Path { get; set; }
    }
}
