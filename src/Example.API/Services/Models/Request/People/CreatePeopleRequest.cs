using System.ComponentModel.DataAnnotations;

namespace Example.API.Services.Models.Request.People
{
    public class CreatePeopleRequest
    {
        [Required]
        public int CityId { get; set; }
        [Required]
        [StringLength(300)]
        public string Name { get; set; }
        [Required]
        [StringLength(11)]
        public string CPF { get; set; }
        [Required]
        public int Age { get; set; }
    }
}
