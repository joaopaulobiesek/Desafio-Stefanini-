using Example.API.Services.Models.Request.City;
using Example.API.Services.Models.Response.City;

namespace Example.API.Services
{
    public interface ICityService
    {
        Task<GetAllCityResponse> GetAllAsync();
        Task<GetByIdCityResponse> GetByIdAsync(int id);
        Task<CreateCityResponse> CreateAsync(CreateCityRequest request);
        Task<UpdateCityResponse> UpdateAsync(int id, UpdateCityRequest request);
        Task<DeleteCityResponse> DeleteAsync(int id);
    }
}
