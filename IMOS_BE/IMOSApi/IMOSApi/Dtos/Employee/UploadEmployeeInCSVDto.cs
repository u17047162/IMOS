using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Employee
{
    public class UploadEmployeeInCSVDto
    {
        [Required]
        public string FileUrl { get; set; }

    }
}
