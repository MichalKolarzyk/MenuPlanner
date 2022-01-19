using AutoMapper;
using MenuPlanner.API.Models.Steps;
using MenuPlanner.API.Services;
using Microsoft.AspNetCore.Authorization;
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

        /// <summary>
        /// Dodanie kroku do przepisu. (Creator)
        /// </summary>
        /// <param name="recipeId"></param>
        /// <param name="stepDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize("Creator")]
        public ActionResult Create([FromRoute] int recipeId, [FromBody]CreateStepDto stepDto)
        {
            int id = _stepService.Create(recipeId, stepDto);

            return Created($"/api/recipe/{recipeId}/step/{id}", null);
        }


        /// <summary>
        /// Pobranie kroku z wybranego przepisu. (Viewer)
        /// </summary>
        /// <param name="recipeId">Id przepisu</param>
        /// <param name="id">Id kroku</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [Authorize("Viewer")]
        public ActionResult<StepDto> Get([FromRoute] int recipeId, [FromRoute] int id)
        {
            StepDto stepDto = _stepService.Get(recipeId, id);
            return stepDto;
        }

        /// <summary>
        /// Usunięcie kroku z wybranego przepisu. (Creator)
        /// </summary>
        /// <param name="recipeId">Id przepisu</param>
        /// <param name="id">Id kroku</param>
        /// <returns></returns>
        [HttpDelete]
        [Authorize("Creator")]
        public ActionResult Delete([FromRoute] int recipeId, [FromQuery] int id)
        {
            _stepService.Delete(recipeId, id);

            return NoContent();
        }

    }
}
