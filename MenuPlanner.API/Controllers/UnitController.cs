using MenuPlanner.API.Models.Units;
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
    public class UnitController : Controller
    {
        private readonly IUnitService _unitService;

        public UnitController(IUnitService unitService)
        {
            _unitService = unitService;
        }
        [HttpPost]
        public ActionResult Create([FromBody] CreateUnitDto unitDto)
        {
            int id =_unitService.Create(unitDto);
            return Ok(id);
        }

        [HttpDelete]
        public ActionResult Delete([FromQuery] int id)
        {
            _unitService.Delete(id);
            return Ok();
        }

    }
}
