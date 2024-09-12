using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Client
{
    public class GetRequests
    {
        public int RequestId { get; set; }

        public int ClientId { get; set; }
        public string ClientName { get; set; }

        public string Description { get; set; }
    }
}
