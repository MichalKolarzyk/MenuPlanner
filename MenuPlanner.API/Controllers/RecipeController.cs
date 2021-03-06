using MenuPlanner.API.Abstracts;
using MenuPlanner.API.Models.Recipes;
using MenuPlanner.API.Models.Tags;
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
    [Route("api/[controller]")]
    public class RecipeController : Controller
    {
        private readonly IRecipeService _recipeService;

        public RecipeController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }

        /// <summary>
        /// Utwórz recepturę. (Creator)
        /// </summary>
        /// <param name="recipeDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize("Creator")]
        public ActionResult<int> Create(CreateRecipeDto recipeDto)
        {
            int id = _recipeService.Create(recipeDto);
            return Created($"/api/recipe/{id}", null);
        }

        /// <summary>
        /// Pobierz listę receptur. (Viewer)
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost("getList")]
        [Authorize("Viewer")]
        public ActionResult<PagedResponse<RecipeDto>> Get([FromBody] RecipeRequest request)
        {
            PagedResponse<RecipeDto> response = _recipeService.Get(request);
            return Ok(response);
        }


        /// <summary>
        /// Pobierz wybraną recepturę. (Viewer)
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [Authorize("Viewer")]
        public ActionResult<RecipeDto> Get([FromRoute] int id)
        {
            RecipeDto recipeDto = _recipeService.Get(id);
            return Ok(recipeDto);
        }

        /// <summary>
        /// Usuń wybraną recepturę. (Creator)
        /// </summary>
        /// <param name="id"></param>
        /// <remarks>Recepturę może usunąć tylko autor.</remarks>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [Authorize("Creator")]
        public ActionResult<RecipeDto> Delete([FromRoute] int id)
        {
            _recipeService.Delete(id);
            return NoContent();
        }

        /// <summary>
        /// Pobierz tagi z receptury. (Viewer)
        /// </summary>
        /// <param name="recipeId">Id przepisu</param>
        /// <returns></returns>
        [HttpGet("{recipeId}/tags")]
        [Authorize("Viewer")]
        public ActionResult<IEnumerable<TagDto>> GetTags([FromRoute] int recipeId)
        {
            IEnumerable<TagDto> tagDtos = _recipeService.GetTags(recipeId);
            return Ok(tagDtos);
        }

        /// <summary>
        /// Dodaj tag do receptury. (Creator)
        /// </summary>
        /// <param name="recipeId">Id receptury</param>
        /// <param name="tagId">Id tagu</param>
        /// <returns></returns>
        [HttpPut("{recipeId}/tags/{tagId}")]
        [Authorize("Creator")]
        public ActionResult AddTag([FromRoute] int recipeId, [FromRoute] int tagId)
        {
            _recipeService.AddTag(recipeId, tagId);
            return Ok(tagId);
        }


        /// <summary>
        /// Usuń tag z wybranej receptury. (Creator)
        /// </summary>
        /// <param name="recipeId">Id receptury</param>
        /// <param name="tagId">Id tagu</param>
        /// <returns></returns>
        [HttpDelete("{recipeId}/tags/{tagId}")]
        [Authorize("Creator")]
        public ActionResult RemoveTag([FromRoute] int recipeId, [FromRoute] int tagId)
        {
            _recipeService.RemoveTag(recipeId, tagId);
            return NoContent();
        }
    }
}
