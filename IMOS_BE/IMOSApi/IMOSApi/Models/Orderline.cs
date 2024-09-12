using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Orderline
    {
        public Orderline()
        {
            Deliveries = new HashSet<Delivery>();
            Suppliermaterialorders = new HashSet<Suppliermaterialorder>();
        }

        public int OrderId { get; set; }
        public DateTime Date { get; set; }
        public string OrderNumber { get; set; }
        public int SupplierId { get; set; }
        public string OrderStatusDescription { get; set; }

        public virtual Supplier Supplier { get; set; }
        public virtual ICollection<Delivery> Deliveries { get; set; }
        public virtual ICollection<Suppliermaterialorder> Suppliermaterialorders { get; set; }
    }
}
