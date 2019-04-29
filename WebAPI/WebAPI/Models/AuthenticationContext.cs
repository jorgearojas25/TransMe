using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class AuthenticationContext : IdentityDbContext
    {
        public AuthenticationContext(DbContextOptions <AuthenticationContext> options) : base(options)
        {

        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Evento> Eventos { get; set; }
        public DbSet<UsuarioEvento> UsuarioEventos { get; set; }
        public DbSet<EventoCategoria> EventoCategorias { get; set; }
        public DbSet<UsuarioCategoria> UsuarioCategorias { get; set; }









    }
}
