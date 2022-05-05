using Example.API.Data;
using Example.API.Services.Models.Request.People;
using Example.API.Services.Models.Response.People;
using Example.Application.Common;

namespace Example.API.Services
{
    public class PeopleService : BaseService<PeopleService>, IPeopleService
    {
        private readonly MSSQLContext _context;

        public PeopleService(ILogger<PeopleService> logger, MSSQLContext context) : base(logger)
        {
            _context = context;
        }

        public Task<CreatePeopleResponse> CreateAsync(CreatePeopleRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<DeletePeopleResponse> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<GetAllPeopleResponse> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<GetByIdPeopleResponse> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<UpdatePeopleResponse> UpdateAsync(int id, UpdatePeopleRequest request)
        {
            throw new NotImplementedException();
        }
    }
}