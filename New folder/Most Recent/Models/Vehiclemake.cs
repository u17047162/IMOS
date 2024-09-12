using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Vehiclemake
    {
        public Vehiclemake()
        {
            Vehicletypes = new HashSet<Vehicletype>();
        }

        public int BrandId { get; set; }
        public string Name { get; set; }
        public int VehicleId { get; set; }

        public virtual Vehicle Vehicle { get; set; }
        public virtual ICollection<Vehicletype> Vehicletypes { get; set; }
    }
}
