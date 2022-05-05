using Example.API._Common;
using Example.API.Data;
using Example.API.Models;
using Example.API.Services.Models.Dtos;
using Example.API.Services.Models.Request.People;
using Example.API.Services.Models.Response.People;
using Microsoft.EntityFrameworkCore;

namespace Example.API.Services
{
    public class PeopleService : BaseService<PeopleService>, IPeopleService
    {
        private readonly MSSQLContext _context;

        public PeopleService(ILogger<PeopleService> logger, MSSQLContext context) : base(logger)
        {
            _context = context;
        }

        public async Task<CreatePeopleResponse> CreateAsync(CreatePeopleRequest request)
        {
            if (request == null)
                throw new ArgumentException("Request empty!");

            var newExample = People.Create(request.CityId, request.Name, request.CPF, request.Age);

            _context.Peoples.Add(newExample);

            await _context.SaveChangesAsync();

            return new CreatePeopleResponse() { Id = newExample.Id };
        }

        public async Task<DeletePeopleResponse> DeleteAsync(int id)
        {
            var entity = await _context.Peoples.FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null)
            {
                _context.Remove(entity);
                await _context.SaveChangesAsync();
            }

            return new DeletePeopleResponse();
        }

        public async Task<GetAllPeopleResponse> GetAllAsync()
        {
            var entity = await _context.Peoples.Include(d => d.City).ToListAsync();
            return new GetAllPeopleResponse()
            {
                Peoples = entity != null ? entity.Select(a => (PeopleDto)a).ToList() : new List<PeopleDto>()
            };
        }

        public async Task<GetByIdPeopleResponse> GetByIdAsync(int id)
        {
            var response = new GetByIdPeopleResponse();

            var entity = await _context.Peoples.Include(d => d.City).FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null) response.Example = (PeopleDto)entity;

            return response;
        }

        public async Task<UpdatePeopleResponse> UpdateAsync(int id, UpdatePeopleRequest request)
        {
            if (request == null)
                throw new ArgumentException("Request empty!");

            var entity = await _context.Peoples.FirstOrDefaultAsync(item => item.Id == id);

            if (entity != null)
            {
                entity.Update(request.CityId, request.Name, request.CPF, request.Age);
                await _context.SaveChangesAsync();
            }

            return new UpdatePeopleResponse();
        }
    }
}