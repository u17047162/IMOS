using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Administration
{
    public class AddOrUpdateRoleDto
    {
        [Required]
        public string Name { get; set; }
    }
}
