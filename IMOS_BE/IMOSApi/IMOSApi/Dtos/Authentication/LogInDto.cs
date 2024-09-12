using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Authentication
{
    public class LogInDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        /*public LogInDto(User user,string token)
        {

        }*/
    }
}
