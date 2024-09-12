using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Vehicle
{
    public class AddOrUpdateVehicleDto
    {
        [Required]
        public int BrandId { get; set; }

        [Required]
        public int VehicletypeId { get; set; }

        [Required]
        public int ModelId { get; set; }

        public int AssignedStatus { get; set; }
     
        public string ImageUrl { get; set; }
   
        [Required]
        public DateTime DatePurchased { get; set; }
    }
}
