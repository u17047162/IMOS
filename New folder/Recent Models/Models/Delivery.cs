using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Delivery
    {
        public int DeliveryId { get; set; }
        public int ProjectId { get; set; }
        public int OrderId { get; set; }
        public DateTime Date { get; set; }
        public byte[] Deliverynote { get; set; }
        public int WarehouseId { get; set; }
        public int ConstructionsiteId { get; set; }

        public virtual Constructionsite Constructionsite { get; set; }
        public virtual Orderline Order { get; set; }
        public virtual Project Project { get; set; }
        public virtual Warehouse Warehouse { get; set; }
    }
}
