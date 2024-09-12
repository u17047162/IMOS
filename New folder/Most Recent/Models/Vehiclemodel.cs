using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Vehiclemodel
    {
        public int ModelId { get; set; }
        public string Name { get; set; }
        public int VehicletypeId { get; set; }
        public DateTime Year { get; set; }
        public string Color { get; set; }

        public virtual Vehicletype Vehicletype { get; set; }
    }
}
