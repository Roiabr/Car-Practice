using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webAPI.Models
{
    public class Model
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string model { get; set; }

    }
}
