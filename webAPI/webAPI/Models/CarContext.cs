using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webAPI.Models;

namespace webAPI.Models
{
    public class CarContext:DbContext
    {
        public CarContext(DbContextOptions<CarContext> options):base(options)
        {   

        }
        public DbSet<Car> Car { get; set; }
        public DbSet<webAPI.Models.Employee> Employee { get; set; }
        public DbSet<webAPI.Models.Model> Model { get; set; }
    }
}
