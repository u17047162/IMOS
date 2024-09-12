using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Vehicle
    {
        public Vehicle()
        {
          
            UserVehicle = new HashSet<UserVehicle>();
        }

        public int VehicleId { get; set; }
        public int VehicletypeId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public DateTime Year { get; set; }
        public string Color { get; set; }
        public DateTime DatePurchased { get; set; }
        public int AssignedStatus { get; set; }
        public string ImageUrl { get; set; }



        public virtual Vehicletype Vehicletype { get; set; }
      
        public virtual ICollection<UserVehicle> UserVehicle { get; set; }
    }
}
