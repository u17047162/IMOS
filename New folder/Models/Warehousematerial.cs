using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Warehousematerial
    {
        public int WarehouseId { get; set; }
        public int MaterialId { get; set; }
        public int QuantityOnHand { get; set; }

        public virtual Material Material { get; set; }
        public virtual Warehouse Warehouse { get; set; }
    }
}
