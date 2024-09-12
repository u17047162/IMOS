using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Warehouseequipment
    {
        public Warehouseequipment()
        {
            Warehouseequipmentchecks = new HashSet<Warehouseequipmentcheck>();
            Warehouseequipmentwriteoffs = new HashSet<Warehouseequipmentwriteoff>();
        }

        public int WarehouseId { get; set; }
        public int EquipmentId { get; set; }
        public int Quantity { get; set; }

        public virtual Equipment Equipment { get; set; }
        public virtual Warehouse Warehouse { get; set; }
        public virtual ICollection<Warehouseequipmentcheck> Warehouseequipmentchecks { get; set; }
        public virtual ICollection<Warehouseequipmentwriteoff> Warehouseequipmentwriteoffs { get; set; }
    }
}
