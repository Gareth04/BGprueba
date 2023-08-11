using BancoProject.data;
using BancoProject.Modelo;
using Microsoft.EntityFrameworkCore;

namespace BancoProject.services
{
    public class ProductoServices
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductoServices(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<Producto>> ObtenerTodosLosProductosAsync()
        {
            return await _dbContext.Productos.ToListAsync();
        }
    }
}
