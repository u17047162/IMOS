using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Vehiclemake
    {
        public Vehiclemake()
        {
            Vehiclemodels = new HashSet<Vehiclemodel>();
            Vehicles = new HashSet<Vehicle>();
        }

        public int BrandId { get; set; }
        public string Name { get; set; }
        public int VehicletypeId { get; set; }

        public virtual Vehicletype Vehicletype { get; set; }
        public virtual ICollection<Vehiclemodel> Vehiclemodels { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
    }
}
