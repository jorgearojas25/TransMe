using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class VagonRuta
    {
        public int Id { get; set; }
        public string VagonesID { get; set; }
        public Vagon Vagones { get; set; }
        public int RutasID { get; set; }
        public Ruta Rutas { get; set; }
    }
}
