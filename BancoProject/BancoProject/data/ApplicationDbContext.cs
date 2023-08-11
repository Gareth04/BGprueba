using BancoProject.Modelo;
using Microsoft.EntityFrameworkCore;

namespace BancoProject.data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Producto> Productos { get; set; }
        public ApplicationDbContext(DbContextOptions options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
    
}
