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
        [Authorize(Roles ="Admin")]
        public ActionResult Create([FromBody] CreateTagDto tagDto)
        {
            int id = _tagService.Create(tagDto);
            return Ok(id);
        }

        [HttpDelete]
        [Authorize(Roles = "Admin")]
        public ActionResult Delete([FromQuery] int id)
        {
            _tagService.Delete(id);
            return NoContent();
        }

        [HttpGet]
        public ActionResult<IEnumerable<TagDto>> GetAll()
        {
            var result = _tagService.GetAll();
            return Ok(result);
        }

        [HttpPut]
        [Authorize(Roles = "Admin")]
        public ActionResult Update(UpdateTagDto tagDto)
        {
            _tagService.Update(tagDto);
            return Ok();
        }

    }
}
