using Example.API.Models.Exceptions;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Example.API.Models
{
    public class People
    {
        private People() { }

        private People(int cityId, string name, string cpf, int age)
        {
            this.CityId = cityId;
            this.Name = name;
            this.CPF = cpf;
            this.Age = age;
        }

        [Key]
        public int Id { get; set; }
        public City City { get; set; }

        [ForeignKey("City")]
        [Display(Name = "City name")]
        public int CityId { get; set; }
        [Required]
        [StringLength(300)]
        public string Name { get; set; }
        [Required]
        [StringLength(11)]
        public string CPF { get; set; }
        [Required]
        public int Age { get; set; }

        public static People Create(int cityId, string name, string cpf, int age)
        {
            if (name == null)
                throw new ArgumentException("Invalid " + nameof(name));

            if (cpf == null)
                throw new ArgumentException("Invalid " + nameof(cpf));

            if (age == 0)
                throw new ArgumentException("Invalid " + nameof(age));


            return new People(cityId, name, cpf, age);
        }

        public void Update(int cityId, string name, string cpf, int age)
        {
            CityId = cityId;

            if (name != null)
                Name = name;

            if (cpf != null)
                CPF = cpf;

            if (age > 50)
                throw new InvalidAgeExceptions();

            if (age != 0)
                Age = age;
        }
    }
}
