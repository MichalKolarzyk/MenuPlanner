using MenuPlanner.API.Attributes;
using MenuPlanner.API.Models.DishTypes;
using MenuPlanner.API.Services.DishTypeServices;
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
    public class DishTypeController : Controller
    {
        private IDishTypeService _dishTypeService;

        public DishTypeController(IDishTypeService dishTypeService)
        {
            _dishTypeService = dishTypeService;
        }

        [HttpGet]
        [ViewerAuth]
        public ActionResult<IEnumerable<DishTypeDto>> GetAll()
        {
            IEnumerable<DishTypeDto> dishTypes = _dishTypeService.GetAll();
            return Ok(dishTypes);
        }

        [HttpPost]
        [AdminAuth]
        public ActionResult Create([FromBody] CreateDishTypeDto createDishTypeDto)
        {
            int id =_dishTypeService.Create(createDishTypeDto);
            return Created($"api/dishType/{id}", null);
        }

        
        [HttpDelete("{id}")]
        [AdminAuth]
        public ActionResult Delete([FromRoute] int id)
        {
            return NoContent();
        }
    }
}
