using MenuPlanner.API.Models.Recipes;
using MenuPlanner.API.Services.FavoriteRecipeServices;
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
    public class FavoriteRecipeController : Controller
    {
        private readonly IFavoriteRecipeService _favoriteRecipeService;

        public FavoriteRecipeController(IFavoriteRecipeService favoriteRecipeService)
        {
            _favoriteRecipeService = favoriteRecipeService;
        }

        /// <summary>
        /// Dodaj przepis do ulubionych dla zalogowanego użytkownika.
        /// </summary>
        /// <param name="id">Id przepisu</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize("Viewer")]
        public ActionResult Create([FromQuery] int id)
        {
            _favoriteRecipeService.Create(id);
            return Ok();
        }

        /// <summary>
        /// Usuń przepis z ulubionych dla zalogowanego użytkownika
        /// </summary>
        /// <param name="id">Id przepisu</param>
        /// <returns></returns>
        [HttpDelete]
        [Authorize("Viewer")]
        public ActionResult Remove([FromQuery] int id)
        {
            _favoriteRecipeService.Remove(id);
            return NoContent();
        }

        /// <summary>
        /// Pobierz listę wszystkich ulubionych przepisów użytkownika
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize("Viewer")]
        public ActionResult<IEnumerable<RecipeDto>> Get()
        {
            IEnumerable<RecipeDto> recipes = _favoriteRecipeService.Get();
            return Ok(recipes);
        }
    }
}
