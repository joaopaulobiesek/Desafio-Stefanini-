using Example.API._Common;
using Example.API.Data;
using Example.API.Services.Models.Request.City;
using Example.API.Services.Models.Response.City;

namespace Example.API.Services
{
    public class CityService : BaseService<CityService>, ICityService
    {
        private readonly MSSQLContext _context;

        public CityService(ILogger<CityService> logger, MSSQLContext context) : base(logger)
        {
            _context = context;
        }

        public Task<CreateCityResponse> CreateAsync(CreateCityRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<DeleteCityResponse> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<GetAllCityResponse> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<GetByIdCityResponse> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<UpdateCityResponse> UpdateAsync(int id, UpdateCityRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
