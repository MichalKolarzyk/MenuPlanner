using MenuPlanner.API.Models.Tags;
using System.Collections.Generic;

namespace MenuPlanner.API.Services
{
    public interface ITagService
    {
        int Create(CreateTagDto tagDto);
        void Delete(int id);
        IEnumerable<TagDto> GetAll();
        void Update(UpdateTagDto tagDto);
        TagDto Get(int id);
    }
}