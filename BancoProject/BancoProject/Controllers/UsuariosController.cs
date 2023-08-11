using BancoProject.data;
using BancoProject.Modelo;
using BancoProject.services;
using Microsoft.AspNetCore.Mvc;


namespace BancoProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly UsuarioServices _usuarioService;

        public UsuariosController(UsuarioServices usuarioService)
        {
            _usuarioService = usuarioService;
        }
        [HttpPost("login")]
        public async Task<ActionResult> Login([FromForm] string email, [FromForm] string password)
        {
            var usuario = await _usuarioService.AuthenticateUserAsync(email, password);

            if (usuario == null)
            {
                return Unauthorized(); // Usuario no autenticado
            }

            // Aquí podrías generar y devolver un token JWT si lo deseas

            return Ok(new { Message = "Usuario autenticado exitosamente", Usuario = usuario });
        }
    }
}
