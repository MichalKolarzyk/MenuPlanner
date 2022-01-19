using MenuPlanner.API.Models.Ingredients;
using MenuPlanner.API.Services.IngredientServices;
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
    public class IngredientController : Controller
    {
        private readonly IIngredientService _ingredientService;

        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        /// <summary>
        /// Dodaj składnik do przepisu. ("Creator")
        /// </summary>
        /// <param name="recipeId">Id przepisu</param>
        /// <param name="ingredientDto">Składnik</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize("Creator")]
        public ActionResult Add([FromRoute] int recipeId, CreateIngredientDto ingredientDto)
        {
            int id = _ingredientService.Add(recipeId, ingredientDto);
            return Created($"/api/recipe/{recipeId}/ingredient/{id}", null);
        }

        /// <summary>
        /// Pobierz składnik z przepisu. ("Viewer")
        /// </summary>
        /// <param name="recipeId">Id przepisu</param>
        /// <param name="id">Id składnika</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [Authorize("Viewer")]
        public ActionResult<IngredientDto> Get([FromRoute] int recipeId, [FromRoute] int id)
        {
            IngredientDto ingredientDto = _ingredientService.Get(recipeId, id);
            return Ok(ingredientDto);
        }

        /// <summary>
        /// Usuń składnik z przepisu. ("Creator")
        /// </summary>
        /// <param name="recipeId">Id przepisu</param>
        /// <param name="id">Id usówanego składnika</param>
        /// <returns></returns>
        [HttpDelete]
        [Authorize("Creator")]
        public ActionResult Delete([FromRoute] int recipeId, [FromQuery] int id)
        {
            _ingredientService.Delete(recipeId, id);
            return NoContent();
        }

    }
}
