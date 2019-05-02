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
    public class EventoController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public EventoController(AuthenticationContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("estad")]
        public async Task<Object> GetEstad()
        {
            var eventos = (from e in _context.Eventos
                           join c in _context.Categoria
                           on e.CategoriaID equals c.id
                           select new
                           {
                               Evento = e.NombreEvento,
                               idEvento = e.id,
                               DescripcionEvento = e.Descripcion,
                               idCategoria = c.id.Count(),
                               colorCategoria = c.color,
                               Categoria = c.Nombre,
                               FechaEvento = e.Fecha,
                               HoraEvento = e.Hora,
                               LugarEvento = e.Lugar,
                               EstacionRecomendada = e.Estacion,
                               CostoEvento = e.Costo
                               
                           });
            return eventos;
        }


        // GET: api/Evento
        [HttpGet]
        public async Task<Object> GetEventos()
        {
            var eventos = (from e in _context.Eventos
                           join c in _context.Categoria
                           on e.CategoriaID equals c.id
                           select new
                           {    
                               Evento = e.NombreEvento,
                               idEvento = e.id,
                               DescripcionEvento = e.Descripcion,
                               idCategoria = c.id,
                               colorCategoria = c.color,
                               Categoria = c.Nombre,
                               FechaEvento = e.Fecha,
                               HoraEvento = e.Hora,
                               LugarEvento = e.Lugar,
                               EstacionRecomendada = e.Estacion,
                               CostoEvento = e.Costo
                           });
            return eventos;
        }

        /**[HttpGet("CategoriaID")]
        [Route("EventosDe")]
        public async Task<Object> FiltroEventos([FromRoute] string CategoriaID)
        {
            var eventosF = (from e in _context.Eventos
                           join c in _context.Categoria
                           on  equals c.id
                           select new {
                               Evento = e.NombreEvento,
                               DescripcionEvento = e.Descripcion,
                               idCategoria = c.id,
                               Categoria = c.Nombre,
                               FechaEvento = e.Fecha,
                               HoraEvento = e.Hora,
                               LugarEvento = e.Lugar,
                               EstacionRecomendada = e.Estacion,
                               CostoEvento = e.Costo
                           });
            return eventosF;
        }**/

        // GET: api/Evento/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvento([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var evento = await _context.Eventos.FindAsync(id);

            if (evento == null)
            {
                return NotFound();
            }

            return Ok(evento);
        }

        // PUT: api/Evento/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvento([FromRoute] string id, [FromBody] Evento evento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != evento.id)
            {
                return BadRequest();
            }

            _context.Entry(evento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventoExists(id))
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

        // POST: api/Evento
        [HttpPost]
        public async Task<IActionResult> PostEvento([FromBody] Evento evento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Eventos.Add(evento);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEvento", new { id = evento.id }, evento);
        }

        // DELETE: api/Evento/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvento([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var evento = await _context.Eventos.FindAsync(id);
            if (evento == null)
            {
                return NotFound();
            }

            _context.Eventos.Remove(evento);
            await _context.SaveChangesAsync();

            return Ok(evento);
        }

        private bool EventoExists(string id)
        {
            return _context.Eventos.Any(e => e.id == id);
        }
    }
}