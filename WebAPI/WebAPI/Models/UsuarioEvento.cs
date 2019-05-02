using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class UsuarioEvento
    {
        public int Id { get; set; }
        public string EventoID { get; set; }
        public Evento Evento { get; set; }
        public string UsuarioID { get; set; }
        public ApplicationUser Usuario { get; set; }

    }
}
