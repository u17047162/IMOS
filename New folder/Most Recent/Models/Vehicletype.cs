using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Vehicletype
    {
        public Vehicletype()
        {
            Vehiclemodels = new HashSet<Vehiclemodel>();
        }

        public int VehicletypeId { get; set; }
        public string Description { get; set; }
        public int BrandId { get; set; }

        public virtual Vehiclemake Brand { get; set; }
        public virtual ICollection<Vehiclemodel> Vehiclemodels { get; set; }
    }
}
