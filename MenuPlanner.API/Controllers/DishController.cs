﻿using MenuPlanner.API.Models.Dishes;
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
            int id = _dishService.Create(dish);
            return Ok(id);
        }

        [HttpGet]
        public ActionResult<DishResponse> Get([FromBody] DishRequest request)
        {
            DishResponse response = _dishService.Get(request);

            return Ok(response);
        }

    }
}
