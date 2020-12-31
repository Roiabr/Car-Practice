using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class Car
    {
        [Key]
        public int id { get; set; }
        [Required]
        public int plate_id { get; set; }
        [Required]
        public int model { get; set; }
        [Required]
        public bool four_on_four { get; set; }
        [Required]
        public int engine_size { get; set; }
        [Required]
        public int year { get; set; }
        
        [Column(TypeName = "varchar(100)")]
        public String comment { get; set; }
        
        public int delivered { get; set; }
        [Required]
        public DateTime fix_date { get; set; }
        [Required]
        public DateTime last_updated { get; set; }


    }
}
