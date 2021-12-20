using AutoMapper;
using MenuPlanner.API.Models.Steps;
using MenuPlanner.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Controllers
{
    [ApiController]
    [Route("api/recipe/{recipeId}/[controller]")]
    public class StepController : Controller
    {
        private readonly IStepService _stepService;

        public StepController(IStepService stepService)
        {
            _stepService = stepService;
        }


        [HttpPost]
        public ActionResult Create([FromRoute] int recipeId, [FromBody]CreateStepDto stepDto)
        {
            int id = _stepService.Create(recipeId, stepDto);

            return Ok(id);
        }

        [HttpDelete]
        public ActionResult Delete([FromQuery] int id)
        {
            _stepService.Delete(id);

            return Ok();
        }

    }
}
