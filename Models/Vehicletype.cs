using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Vehicletype
    {
        public Vehicletype()
        {
            Vehiclemakes = new HashSet<Vehiclemake>();
            Vehicles = new HashSet<Vehicle>();
        }

        public int VehicletypeId { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Vehiclemake> Vehiclemakes { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
    }
}
