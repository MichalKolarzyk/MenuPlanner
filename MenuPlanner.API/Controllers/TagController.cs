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
    public class TagController : Controller
    {
        private readonly ITagService _tagService;

        public TagController(ITagService tagService)
        {
            _tagService = tagService;
        }

        [HttpPost]
        [Authorize("Admin")]
        public ActionResult Create([FromBody] CreateTagDto tagDto)
        {
            int id = _tagService.Create(tagDto);
            return Created($"/api/tag/{id}",null);
        }

        [HttpDelete]
        [Authorize("Admin")]
        public ActionResult Delete([FromQuery] int id)
        {
            _tagService.Delete(id);
            return NoContent();
        }

        [HttpGet]
        [Authorize("Viewer")]
        public ActionResult<IEnumerable<TagDto>> Get()
        {
            var result = _tagService.GetAll();
            return Ok(result);
        }

        [HttpGet("{id}")]
        [Authorize("Viewer")]
        public ActionResult<TagDto> Get([FromRoute] int id)
        {
            TagDto tagDto = _tagService.Get(id);
            return Ok(tagDto);
        }

        [HttpPut]
        [Authorize("Admin")]
        public ActionResult Update(UpdateTagDto tagDto)
        {
            _tagService.Update(tagDto);
            return Ok();
        }

    }
}
