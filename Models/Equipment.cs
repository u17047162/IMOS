using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Equipment
    {
        public Equipment()
        {
            Projectequipments = new HashSet<Projectequipment>();
            Warehouseequipments = new HashSet<Warehouseequipment>();
        }

        public int EquipmentId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Projectequipment> Projectequipments { get; set; }
        public virtual ICollection<Warehouseequipment> Warehouseequipments { get; set; }
    }
}
