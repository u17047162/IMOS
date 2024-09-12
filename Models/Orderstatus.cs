using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Orderstatus
    {
        public Orderstatus()
        {
            Orderlines = new HashSet<Orderline>();
        }

        public int OrderStatusId { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Orderline> Orderlines { get; set; }
    }
}
