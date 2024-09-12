using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Project
{
    public class AddOrUpdateProjectDto
    {
        [Required]
        public string Name { get; set; }
       // public string FileUrl { get; set; }
        [Required]
        public int ConstructionsiteId { get; set; }
        [Required]
        public int InitialrequestId { get; set; }
      
    }
}
