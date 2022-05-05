using System.ComponentModel.DataAnnotations;

namespace Example.API.Models
{
    public class City
    {
        private City() { }

        private City(string name, string uf)
        {
            this.Name = name;
            this.UF = uf;
        }

        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(200)]
        public string Name { get; set; }
        [Required]
        [StringLength(2)]
        public string UF { get; set; }

        public static City Create(string name, string uf)
        {
            if (name == null)
                throw new ArgumentException("Invalid " + nameof(name));

            if (uf == null)
                throw new ArgumentException("Invalid " + nameof(uf));

            return new City(name, uf);
        }

        public void Update(string name, string uf)
        {
            if (name != null)
                Name = name;

            if (uf != null)
                UF = uf;
        }
    }
}
