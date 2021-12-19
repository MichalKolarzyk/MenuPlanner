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
    [Route("api/dish")]
    public class DishController : Controller
    {
        IDishService _dishService;
        public DishController(IDishService dishService)
        {
            _dishService = dishService;
        }

        [HttpGet]
        public ActionResult Get([FromQuery] int id)
        {
            int newId = id;
            return Ok(newId);
        }

        [HttpPost]
        public ActionResult Create([FromBody] CreateDishDto dish)
        {
            _dishService.Create(dish);
            return Ok(dish.date);
        }

    }
}
