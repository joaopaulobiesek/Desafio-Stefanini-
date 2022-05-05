using Example.API._Common;
using Example.API.Services.Models.Dtos;

namespace Example.API.Services.Models.Response.City
{
    public class GetByIdCityResponse : BaseResponse
    {
        public CityDto City { get; set; }
    }
}
