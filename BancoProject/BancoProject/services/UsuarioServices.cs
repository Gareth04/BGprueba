using BancoProject.data;
using BancoProject.Modelo;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BancoProject.services
{
    public class UsuarioServices
    {
        private readonly ApplicationDbContext _dbContext;

        public UsuarioServices(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Usuarios> AuthenticateUserAsync(string email, string password)
        {
            var usuario = await _dbContext.Usuarios.FirstOrDefaultAsync(u => u.Email == email && u.PasswordHash == password);

            return usuario; // Usuario autenticado o null si no se encuentra
        }
    }
}
