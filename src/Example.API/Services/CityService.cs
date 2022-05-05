using Example.API._Common;
using Example.API.Data;
using Example.API.Models;
using Example.API.Services.Models.Dtos;
using Example.API.Services.Models.Request.City;
using Example.API.Services.Models.Response.City;
using Microsoft.EntityFrameworkCore;

namespace Example.API.Services
{
    public class CityService : BaseService<CityService>, ICityService
    {
        private readonly MSSQLContext _context;

        public CityService(ILogger<CityService> logger, MSSQLContext context) : base(logger)
        {
            _context = context;
        }

        public async Task<CreateCityResponse> CreateAsync(CreateCityRequest request)
        {
            if (request == null)
                throw new ArgumentException("Request empty!");

            var newExample = City.Create(request.Name, request.UF);

            _context.Cities.Add(newExample);

            await _context.SaveChangesAsync();

            return new CreateCityResponse() { Id = newExample.Id };
        }

        public async Task<DeleteCityResponse> DeleteAsync(int id)
        {
            var entity = await _context.Cities.FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null)
            {
                _context.Remove(entity);
                await _context.SaveChangesAsync();
            }

            return new DeleteCityResponse();
        }

        public async Task<GetAllCityResponse> GetAllAsync()
        {
            var entity = await _context.Cities.ToListAsync();
            return new GetAllCityResponse()
            {
                Cities = entity != null ? entity.Select(a => (CityDto)a).ToList() : new List<CityDto>()
            };
        }

        public async Task<GetByIdCityResponse> GetByIdAsync(int id)
        {
            var response = new GetByIdCityResponse();

            var entity = await _context.Cities.FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null) response.City = (CityDto)entity;

            return response;
        }

        public async Task<UpdateCityResponse> UpdateAsync(int id, UpdateCityRequest request)
        {
            if (request == null)
                throw new ArgumentException("Request empty!");

            var entity = await _context.Cities.FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null)
            {
                entity.Update(request.Name, request.UF);
                await _context.SaveChangesAsync();
            }

            return new UpdateCityResponse();
        }
    }
}
