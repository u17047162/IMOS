using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Warehouseequipmentwriteoff
    {
        public int WriteoffId { get; set; }
        public int WarehouseId { get; set; }
        public int EquipmentId { get; set; }
        public int? Quantity { get; set; }

        public virtual Warehouseequipment Warehouseequipment { get; set; }
        public virtual Writeoff Writeoff { get; set; }
    }
}
