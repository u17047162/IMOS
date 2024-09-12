using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Equipmentcheck
    {
        public Equipmentcheck()
        {
            Warehouseequipmentchecks = new HashSet<Warehouseequipmentcheck>();
        }

        public int EquipmentcheckId { get; set; }
        public int UserId { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Warehouseequipmentcheck> Warehouseequipmentchecks { get; set; }
    }
}
