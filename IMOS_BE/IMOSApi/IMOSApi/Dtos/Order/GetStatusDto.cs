using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Order
{
    public class GetStatusDto
    {
        public int OrderStatusId { get; set; }
        public string Description { get; set; }

    }
}
