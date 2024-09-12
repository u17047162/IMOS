using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Vehicle
{
    public class UploadVehicleDto
    {
        [Required]
        public string ImageUrl { get; set; }
    }
}
