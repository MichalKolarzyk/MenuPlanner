using MenuPlanner.API.Models.Recipes;
using MenuPlanner.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : Controller
    {
        private readonly IRecipeService _recipeService;

        public RecipeController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }

        [HttpPost]
        public ActionResult<int> Create(CreateRecipeDto recipeDto)
        {
            int id = _recipeService.Create(recipeDto);

            return Ok(id);
        }

        [HttpGet]
        public ActionResult<RecipeDto> Get([FromQuery] int id)
        {
            RecipeDto recipe = _recipeService.Get(id);

            return Ok(recipe);
        }

        [HttpPut("{recipeId}/tags/{tagId}")]
        public ActionResult AddTag([FromRoute] int recipeId, [FromRoute] int tagId)
        {
            _recipeService.AddTag(recipeId, tagId);
            return Ok(tagId);
        }


        [HttpDelete("{recipeId}/tags/{tagId}")]
        public ActionResult RemoveTag([FromRoute] int recipeId, [FromRoute] int tagId)
        {
            _recipeService.RemoveTag(recipeId, tagId);
            return NoContent();
        }
    }
}
