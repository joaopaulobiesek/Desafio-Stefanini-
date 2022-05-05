using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Example.API.Models
{
    public class People
    {
        [Key]
        public int Id { get; set; }
        public City City{ get; set; }

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
    }
}
