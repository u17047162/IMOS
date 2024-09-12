using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Client
{
    public class AddOrUpdateClientDto
    {  
        public string ClientName { get; set; }

        public string Clientemail { get; set; }
        public string Contactnumber { get; set; }


    }
}
