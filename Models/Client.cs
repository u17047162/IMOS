using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Client
    {
        public Client()
        {
            Requests = new HashSet<Request>();
        }

        public int ClientId { get; set; }
        public string Contactnumber { get; set; }
        public string Clientname { get; set; }
        public string Clientemail { get; set; }

        public virtual ICollection<Request> Requests { get; set; }
    }
}
