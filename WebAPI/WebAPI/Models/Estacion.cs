using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Estacion
    {
        [Key]
        public string EstacionesID { get; set; }
        public string NombreEstaciones { get; set; }
        public string CoordenadasEstacion { get; set; }
        public string RutaImagen { get; set; }
        public string TroncalesID { get; set; }
        public Troncal Troncales { get; set; }
    }
}
