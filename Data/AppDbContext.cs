using Microsoft.EntityFrameworkCore;
using RISC.Models;

namespace RISC.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Service> Services => Set<Service>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Guide> Guides => Set<Guide>();
}
