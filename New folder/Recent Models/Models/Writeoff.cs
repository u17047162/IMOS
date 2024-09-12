using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Writeoff
    {
        public Writeoff()
        {
            Warehouseequipmentwriteoffs = new HashSet<Warehouseequipmentwriteoff>();
            Warehousematerialwriteoffs = new HashSet<Warehousematerialwriteoff>();
        }

        public int WriteoffId { get; set; }
        public int WriteoffreasonId { get; set; }

        public virtual Writeoffreason Writeoffreason { get; set; }
        public virtual ICollection<Warehouseequipmentwriteoff> Warehouseequipmentwriteoffs { get; set; }
        public virtual ICollection<Warehousematerialwriteoff> Warehousematerialwriteoffs { get; set; }
    }
}
