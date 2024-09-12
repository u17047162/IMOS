using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Warehouse
    {
        public Warehouse()
        {
            Deliveries = new HashSet<Delivery>();
            Warehouseequipments = new HashSet<Warehouseequipment>();
            Warehousematerials = new HashSet<Warehousematerial>();
        }

        public int WarehouseId { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }

        public virtual ICollection<Delivery> Deliveries { get; set; }
        public virtual ICollection<Warehouseequipment> Warehouseequipments { get; set; }
        public virtual ICollection<Warehousematerial> Warehousematerials { get; set; }
    }
}
