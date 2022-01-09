using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Tags;
using Microsoft.Extensions.Logging;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services
{
    public class TagSevice : ITagService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;
        private readonly ILogger<ITagService> _logger;

        public TagSevice(MenuPlannerDbContext context, IMapper mapper, ILogger<ITagService> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }

        public IEnumerable<TagDto> GetAll()
        {
            _logger.LogInformation("Get all tags");

            List<Tag> tags =_context.Tags.ToList();
            List<TagDto> tagsDto = _mapper.Map<List<TagDto>>(tags);
            return tagsDto;
        }

        public int Create(CreateTagDto tagDto)
        {
            Tag tag = _mapper.Map<Tag>(tagDto);
            _context.Tags.Add(tag);
            _context.SaveChanges();

            return tag.Id;
        }

        public void Delete(int id)
        {
            Tag tag = GetTag(id);
            _context.Tags.Remove(tag);
            _context.SaveChanges();
        }

        public void Update(UpdateTagDto tagDto)
        {
            Tag tag = _mapper.Map<Tag>(tagDto);
            bool tagExist = _context.Tags.Any(t => t.Id == tagDto.Id);
            if(tagExist == false)
                throw new NotFoundException("Tag not found");

            _context.Update(tag);
            _context.SaveChanges();
        }
        public TagDto Get(int id)
        {
            Tag tag = GetTag(id);
            TagDto tagDto = _mapper.Map<TagDto>(tag);
            return tagDto;
        }

        private Tag GetTag(int id)
        {
            Tag tag = _context.Tags.FirstOrDefault(t => t.Id == id);
            if (tag == null)
                throw new NotFoundException("Tag not found");
            return tag;
        }


    }
}
