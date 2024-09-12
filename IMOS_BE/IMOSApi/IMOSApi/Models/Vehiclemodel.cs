using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Vehiclemodel
    {
        public Vehiclemodel()
        {
            Vehicles = new HashSet<Vehicle>();
        }

        public int ModelId { get; set; }
        public string Name { get; set; }
        public string Year { get; set; }
        public string Color { get; set; }
        public int BrandId { get; set; }

        public virtual Vehiclemake Brand { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
    }
}
