using MenuPlanner.API.Entities;
using MenuPlanner.API.Models.Role;
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
    public class RoleController : Controller
    {
        private readonly IRoleService _service;

        public RoleController(IRoleService service)
        {
            _service = service;
        }

        /// <summary>
        /// Utworzenie nowej roli. (Admin)
        /// </summary>
        /// <param name="roleDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize("Admin")]
        public ActionResult Create([FromBody] CreateRoleDto roleDto)
        {
            int id = _service.Create(roleDto);
            return Ok(id);
        }

        /// <summary>
        /// Pobranie wszystkich roli. (Admin)
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize("Admin")]
        public ActionResult<IEnumerable<RoleDto>> GetAll()
        {
            IEnumerable<RoleDto> result = _service.GetAll();
            return Ok(result);
        }

        /// <summary>
        /// Usunięcie roli. (Admin)
        /// </summary>
        /// <param name="id">Id roli</param>
        /// <returns></returns>
        [HttpDelete]
        [Authorize("Admin")]
        public ActionResult Remove([FromQuery]int id)
        {
            _service.Delete(id);
            return NoContent();
        }
    }
}
