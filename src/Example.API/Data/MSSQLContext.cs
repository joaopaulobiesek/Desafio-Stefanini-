using Example.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

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
            modelBuilder.ApplyConfiguration(new OrderCityEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new OrderPeopleEntityTypeConfiguration());
            modelBuilder.Entity<City>();
            modelBuilder.Entity<People>();
        }
    }

    public class OrderCityEntityTypeConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> orderConfiguration)
        {
            orderConfiguration.ToTable("City", "dbo");

            orderConfiguration.HasKey(o => o.Id);
            orderConfiguration.Property(o => o.Id).UseIdentityColumn();
            orderConfiguration.Property(o => o.Name).IsRequired();
            orderConfiguration.Property(o => o.UF).IsRequired();
        }
    }

    public class OrderPeopleEntityTypeConfiguration : IEntityTypeConfiguration<People>
    {
        public void Configure(EntityTypeBuilder<People> orderConfiguration)
        {
            orderConfiguration.ToTable("People", "dbo");

            orderConfiguration.HasKey(o => o.Id);
            orderConfiguration.Property(o => o.Id).UseIdentityColumn();
            //orderConfiguration.Property(o => o.CityId).IsRequired();
            orderConfiguration.Property(o => o.Name).IsRequired();
            orderConfiguration.Property(o => o.CPF).IsRequired();
            orderConfiguration.Property(o => o.Age).IsRequired();
        }
    }
}
