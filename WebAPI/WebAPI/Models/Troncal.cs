using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Troncal
    {
        [Key]
        public string TroncalesID { get; set; }
        public string NombreTroncales { get; set; }
        public string InicioCoordenadas { get; set; }
        public string FinalCoordenadas { get; set; }
    }
}
