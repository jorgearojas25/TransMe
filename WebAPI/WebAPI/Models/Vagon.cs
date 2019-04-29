using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Vagon
    {
        [Key]
        public string VagonesID { get; set; }
        public string EstacionesID { get; set; }
        public Estacion Estaciones { get; set; }
        public string Longitud { get; set; }
        public string TipoVagonesID { get; set; }
        public TipoVagon TipoVagones { get; set; }
    }
}
