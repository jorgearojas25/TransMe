using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class UsuarioCategoria
    {
        public int Id { get; set; }
        public string CategoriaID { get; set; }
        public Categoria Categoria { get; set; }
        public string UsuarioID { get; set; }
        public ApplicationUser Usuario { get; set; }

    }
}
