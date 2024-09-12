using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.User.Roles
{
    public class AddOrUpdateRoleDto
    {
        [Required]
        public string Description { get; set; }
    }
}
