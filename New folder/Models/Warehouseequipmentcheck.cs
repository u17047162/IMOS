using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Warehouseequipmentcheck
    {
        public int EquipmentcheckId { get; set; }
        public int WarehouseId { get; set; }
        public int EquipmentId { get; set; }
        public DateTime? CheckIn { get; set; }
        public DateTime? CheckOut { get; set; }

        public virtual Equipmentcheck Equipmentcheck { get; set; }
        public virtual Warehouseequipment Warehouseequipment { get; set; }
    }
}
