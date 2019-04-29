using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Ruta
    {
        [Key]
        public string RutasID { get; set; }
        public string NombreRuta { get; set; }
        public string InicioRuta { get; set; }
        public string FinRuta { get; set; }
    }
}
