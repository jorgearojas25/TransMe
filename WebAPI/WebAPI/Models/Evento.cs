using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Evento
    {
        public string EventoID { get; set; }
        public string NombreEvento { get; set; }
        public string Descripcion { get; set; }
        public DateTime Fecha { get; set; }
        public TimeSpan Hora { get; set; }
        public string Lugar { get; set; }
        public string EstacionesID { get; set; }
        public Estacion Estaciones { get; set; }
        public decimal Costo { get; set; }
    }
}
