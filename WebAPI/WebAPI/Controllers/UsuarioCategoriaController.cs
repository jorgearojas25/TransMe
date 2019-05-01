using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioCategoriaController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public UsuarioCategoriaController(AuthenticationContext context)
        {
            _context = context;
        }

        // GET: api/UsuarioCategoria
        [HttpGet]
        public IEnumerable<UsuarioCategoria> GetUsuarioCategorias()
        {
            return _context.UsuarioCategorias;
        }

        // GET: api/UsuarioCategoria/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUsuarioCategoria([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuarioCategoria = await _context.UsuarioCategorias.FindAsync(id);

            if (usuarioCategoria == null)
            {
                return NotFound();
            }

            return Ok(usuarioCategoria);
        }

        // PUT: api/UsuarioCategoria/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuarioCategoria([FromRoute] int id, [FromBody] UsuarioCategoria usuarioCategoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuarioCategoria.Id)
            {
                return BadRequest();
            }

            _context.Entry(usuarioCategoria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioCategoriaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UsuarioCategoria
        [HttpPost]
        public async Task<IActionResult> PostUsuarioCategoria([FromBody] UsuarioCategoria usuarioCategoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.UsuarioCategorias.Add(usuarioCategoria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsuarioCategoria", new { id = usuarioCategoria.Id }, usuarioCategoria);
        }

        // DELETE: api/UsuarioCategoria/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuarioCategoria([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuarioCategoria = await _context.UsuarioCategorias.FindAsync(id);
            if (usuarioCategoria == null)
            {
                return NotFound();
            }

            _context.UsuarioCategorias.Remove(usuarioCategoria);
            await _context.SaveChangesAsync();

            return Ok(usuarioCategoria);
        }

        private bool UsuarioCategoriaExists(int id)
        {
            return _context.UsuarioCategorias.Any(e => e.Id == id);
        }
    }
}