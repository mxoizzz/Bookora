using Microsoft.EntityFrameworkCore;
using Bookora.API.Models;

namespace Bookora.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>()
            .HasIndex(x => x.Email)
            .IsUnique();
    }
}   