using AutoMapper;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Tags;
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

        public TagSevice(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<TagDto> GetAll()
        {
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


        private Tag GetTag(int id)
        {
            Tag tag = _context.Tags.FirstOrDefault(t => t.Id == id);
            if (tag == null)
                throw new NotFoundException("Tag not found");
            return tag;
        }
    }
}
