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
        public int? UserId { get; set; }
        public DateTime DatePurchased { get; set; }
        public int AssignedStatus { get; set; }
        public string ImageUrl { get; set; }
        public int BrandId { get; set; }
        public int VehicletypeId { get; set; }
        public int ModelId { get; set; }

        public virtual Vehiclemake Brand { get; set; }
        public virtual Vehiclemodel Model { get; set; }
        public virtual User User { get; set; }
        public virtual Vehicletype Vehicletype { get; set; }

        public virtual ICollection<UserVehicle>UserVehicle { get; set; }
    }
}
