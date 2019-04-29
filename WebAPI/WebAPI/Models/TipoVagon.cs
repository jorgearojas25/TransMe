using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class TipoVagon
    {
        [Key]
        public string TipoVagonesID { get; set; }
        public string Longitud { get; set; }
        public string NombreVagon { get; set; }

    }
}
