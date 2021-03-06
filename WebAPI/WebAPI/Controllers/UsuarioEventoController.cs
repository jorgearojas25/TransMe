﻿using System;
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
    public class UsuarioEventoController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public UsuarioEventoController(AuthenticationContext context)
        {
            _context = context;
        }

        

        // GET: api/UsuarioEvento
        [HttpGet]
        public IEnumerable<UsuarioEvento> GetUsuarioEventos()
        {
            return _context.UsuarioEventos;
        }

        [HttpGet]
        [Route("MisEventos")]
        public async Task<Object> MisEventos()
        {
            var misEventos = (from e in _context.Eventos
                              join ue in _context.UsuarioEventos
                              on e.id equals ue.EventoID
                              join u in _context.ApplicationUsers
                              on ue.UsuarioID equals u.Id
                              group new {e,u,ue} by new {ue.EventoID,e.NombreEvento,u.Id,e.CategoriaID,e.Descripcion,e.Fecha,e.Hora,e.Lugar,e.Estacion} into g
                              select new
                              {
                                  idEvento = g.Key.EventoID,
                                  NombreEvent = g.Key.NombreEvento,
                                  idUser = g.Key.Id,
                                  idCategoria = g.Key.CategoriaID,
                                  descripcion = g.Key.Descripcion,
                                  fecha = g.Key.Fecha,
                                  hora = g.Key.Hora,
                                  lugar = g.Key.Lugar,
                                  estacion = g.Key.Estacion

                                  
                              }
                              );
            return misEventos;
        }


        // GET: api/UsuarioEvento/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUsuarioEvento([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuarioEvento = await _context.UsuarioEventos.FindAsync(id);

            if (usuarioEvento == null)
            {
                return NotFound();
            }

            return Ok(usuarioEvento);
        }

        // PUT: api/UsuarioEvento/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuarioEvento([FromRoute] string id, [FromBody] UsuarioEvento usuarioEvento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuarioEvento.id)
            {
                return BadRequest();
            }

            _context.Entry(usuarioEvento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioEventoExists(id))
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

        // POST: api/UsuarioEvento
        [HttpPost]
        public async Task<IActionResult> PostUsuarioEvento([FromBody] UsuarioEvento usuarioEvento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.UsuarioEventos.Add(usuarioEvento);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsuarioEvento", new { id = usuarioEvento.id }, usuarioEvento);
        }

        // DELETE: api/UsuarioEvento/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuarioEvento([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuarioEvento = await _context.UsuarioEventos.FindAsync(id);
            if (usuarioEvento == null)
            {
                return NotFound();
            }

            _context.UsuarioEventos.Remove(usuarioEvento);
            await _context.SaveChangesAsync();

            return Ok(usuarioEvento);
        }

        private bool UsuarioEventoExists(string id)
        {
            return _context.UsuarioEventos.Any(e => e.id == id);
        }
    }
}