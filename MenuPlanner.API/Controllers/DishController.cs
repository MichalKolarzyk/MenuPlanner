using MenuPlanner.API.Models.Dishes;
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
    public class DishController : Controller
    {
        IDishService _dishService;
        public DishController(IDishService dishService)
        {
            _dishService = dishService;
        }

        [HttpPost]
        public ActionResult Create([FromBody] CreateDishDto dish)
        {
            _dishService.Create(dish);
            return Ok(dish.date);
        }

        [HttpGet("{id}")]
        public ActionResult<DishDto> Get([FromRoute] int id)
        {
            DishDto dishDto = _dishService.Get(id);

            return Ok(dishDto);
        }

    }
}
