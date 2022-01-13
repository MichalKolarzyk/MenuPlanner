using MenuPlanner.API.Models.Dishes;
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
    public class DishController : Controller
    {
        IDishService _dishService;
        public DishController(IDishService dishService) 
        {
            _dishService = dishService;
        }

        /// <summary>
        /// Stworzenie nowego dania.
        /// </summary>
        [HttpPost]
        [Authorize("Viewer")]
        public ActionResult Create([FromBody] CreateDishDto dish)
        {
            int id = _dishService.Create(dish);
            return Created($"/api/dish/{id}", null);
        }

        /// <summary>
        /// Pobranie listy dań
        /// </summary>
        /// <remarks>
        /// Role: Viewer 
        /// 
        /// from: pobiera dania od tej daty
        /// 
        /// days: pobiera dania do daty from + ilość dni podanych w tym parametrze
        /// 
        /// usersIds: pobiera dania dla użytkowników podanych w tej liście
        /// 
        /// </remarks>
        [HttpGet]
        [Authorize("Viewer")]
        public ActionResult<DishResponse> Get([FromBody] DishRequest request)
        {
            DishResponse response = _dishService.Get(request);
            return Ok(response);
        }

        /// <summary>
        /// Pobranie dania
        /// </summary>
        /// <param name="id">Id pobieranego dania</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [Authorize("Viewer")]
        public ActionResult<DishDto> Get([FromRoute] int id)
        {
            DishDto dishDto = _dishService.Get(id);
            return Ok(dishDto);
        }
    }
}
