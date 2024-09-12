using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Authentication
{
    public class loggedInUserDto
    {
     
        public string Username { get; set; }

        public string Password { get; set; }

        public string token { get; set; }
      

    }
}
