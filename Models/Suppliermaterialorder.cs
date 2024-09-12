using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Suppliermaterialorder
    {
        public int MaterialId { get; set; }
        public int OrderId { get; set; }
        public int? QuantityOrdered { get; set; }

        public virtual Material Material { get; set; }
        public virtual Orderline Order { get; set; }
    }
}
