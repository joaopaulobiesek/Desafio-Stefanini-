using Example.API.Data;
using Example.API.Services;
using Microsoft.EntityFrameworkCore;

var ErrorCORS = "_ErrorCORS";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: ErrorCORS,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost",
                                              "http://localhost:4200").AllowAnyMethod();
                      });
});

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddScoped<ICityService, CityService>();
builder.Services.AddScoped<IPeopleService, PeopleService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MSSQLContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope())
{
    var dataContext = scope.ServiceProvider.GetRequiredService<MSSQLContext>();
    dataContext.Database.Migrate();
}

app.UseCors(ErrorCORS);

app.UseAuthorization();

app.MapControllers();

app.Run();

