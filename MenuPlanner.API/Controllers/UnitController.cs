using MenuPlanner.API.Models.Units;
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
    public class UnitController : Controller
    {
        private readonly IUnitService _unitService;

        public UnitController(IUnitService unitService)
        {
            _unitService = unitService;
        }

        /// <summary>
        /// Utwórz jednostę miary. ("Admin")
        /// </summary>
        /// <param name="unitDto">obiekt nowej jednostki</param>
        /// <returns></returns>
        [HttpPost]
        [Authorize("Admin")]
        public ActionResult Create([FromBody] CreateUnitDto unitDto)
        {
            int id = _unitService.Create(unitDto);
            return Created($"/api/unit/{id}", null);
        }

        /// <summary>
        /// Usuń wybraną jednostkę miary. ("Admin")
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Authorize("Admin")]
        public ActionResult Delete([FromQuery] int id)
        {
            _unitService.Delete(id);
            return NoContent();
        }

        /// <summary>
        /// Edytuj wybraną jednostkę miary. ("Admin")
        /// </summary>
        /// <param name="unitDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Authorize("Admin")]
        public ActionResult Update([FromBody] UpdateUnitDto unitDto)
        {
            _unitService.Update(unitDto);
            return Ok();
        }

        /// <summary>
        /// Pobierz wszystkie jednostki miary. ("Viewer")
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize("Viewer")]
        public ActionResult<IEnumerable<UnitDto>> Get()
        {
            return Ok(_unitService.GetAll());
        }


        /// <summary>
        /// Pobierz wybraną jednostę miary. ("Viewer")
        /// </summary>
        /// <param name="id">Id jednostki miary</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        [Authorize("Viewer")]
        public ActionResult<UnitDto> Get(int id)
        {
            UnitDto unitDto = _unitService.Get(id);
            return Ok(unitDto);
        }

    }
}
