using System.ComponentModel.DataAnnotations;

namespace Example.API.Models
{
    public class City
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(200)]
        public string Name { get; set; }
        [Required]
        [StringLength(2)]
        public string UF { get; set; }
    }
}
