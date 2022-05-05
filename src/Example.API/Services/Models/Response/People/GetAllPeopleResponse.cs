using Example.API._Common;
using Example.API.Services.Models.Dtos;

namespace Example.API.Services.Models.Response.People
{
    public class GetAllPeopleResponse : BaseResponse
    {
        public List<PeopleDto> Peoples { get; set; }
    }
}
