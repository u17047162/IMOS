using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class User
    {
        public User()
        {
            Auditlogs = new HashSet<Auditlog>();
            Equipmentchecks = new HashSet<Equipmentcheck>();
            Stocktakes = new HashSet<Stocktake>();
            Tasks = new HashSet<Task>();
            Vehicles = new HashSet<Vehicle>();
         
            UserVehicle = new HashSet<UserVehicle>();

        }

        public int UserId { get; set; }
        public int UserroleId { get; set; }
        public int EmployeeId { get; set; }
        public string Username { get; set; }
        public string Userpassword { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual Userrole Userrole { get; set; }
        public virtual ICollection<Auditlog> Auditlogs { get; set; }
        public virtual ICollection<Equipmentcheck> Equipmentchecks { get; set; }
        public virtual ICollection<Stocktake> Stocktakes { get; set; }
        public virtual ICollection<Task> Tasks { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
        public virtual ICollection<UserVehicle> UserVehicle { get; set; }
    }
}
