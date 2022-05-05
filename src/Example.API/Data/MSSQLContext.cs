using Example.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Example.API.Data
{
    public class MSSQLContext : DbContext
    {
        public DbSet<City> Cities { get; set; }
        public DbSet<People> Peoples { get; set; }
        public MSSQLContext(DbContextOptions<MSSQLContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<City>();
            modelBuilder.Entity<People>();
        }

    }
}
