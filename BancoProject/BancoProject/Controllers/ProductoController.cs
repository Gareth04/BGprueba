using BancoProject.Modelo;
using BancoProject.services;
using Microsoft.AspNetCore.Mvc;

namespace BancoProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductoController : ControllerBase
    {
        private readonly ProductoServices _productoService;

        public ProductoController(ProductoServices productoService)
        {
            _productoService = productoService;
        }
        [HttpGet]
        public async Task<ActionResult<List<Producto>>> ObtenerTodosLosProductos()
        {
            var productos = await _productoService.ObtenerTodosLosProductosAsync();
            return Ok(productos);
        }

    }
}
