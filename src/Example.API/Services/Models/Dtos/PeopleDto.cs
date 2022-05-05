using Example.API.Models;
using System.ComponentModel.DataAnnotations;

namespace Example.API.Services.Models.Dtos
{
    public class PeopleDto
    {
        public int Id { get; set; }
        public City City { get; set; }
        [Required]
        [StringLength(300)]
        public string Name { get; set; }
        [Required]
        [StringLength(11)]
        public string CPF { get; set; }
        [Required]
        public int Age { get; set; }

        public static explicit operator PeopleDto(People v)
        {
            return new PeopleDto()
            {
                Id = v.Id,
                City = v.City,
                Name = v.Name,
                CPF = v.CPF,
                Age = v.Age
            };
        }
    }
}
