using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class EventoCategoria
    {
        public int Id { get; set; }
        public string CategoriaID { get; set; }
        public Categoria Categoria { get; set; }
        public string EventoID { get; set; }
        public Evento Evento { get; set; }
    }
}
