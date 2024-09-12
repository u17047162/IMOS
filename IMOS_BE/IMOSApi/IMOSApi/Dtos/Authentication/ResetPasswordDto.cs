using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Authentication
{
    public class ResetPasswordDto
    {
        [Required]
        public string UserName { get; set; }

    }
}
