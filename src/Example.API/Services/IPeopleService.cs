using Example.API.Services.Models.Request.People;
using Example.API.Services.Models.Response.People;

namespace Example.API.Services
{
    public interface IPeopleService
    {
        Task<GetAllPeopleResponse> GetAllAsync();
        Task<GetByIdPeopleResponse> GetByIdAsync(int id);
        Task<CreatePeopleResponse> CreateAsync(CreatePeopleRequest request);
        Task<UpdatePeopleResponse> UpdateAsync(int id, UpdatePeopleRequest request);
        Task<DeletePeopleResponse> DeleteAsync(int id);
    }
}
