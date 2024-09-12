using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Vehicle
    {
        public Vehicle()
        {
            Vehiclemakes = new HashSet<Vehiclemake>();
        }

        public int VehicleId { get; set; }
        public int? UserId { get; set; }
        public DateTime DatePurchased { get; set; }
        public int AssignedStatus { get; set; }
        public string ImageUrl { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Vehiclemake> Vehiclemakes { get; set; }
    }
}
