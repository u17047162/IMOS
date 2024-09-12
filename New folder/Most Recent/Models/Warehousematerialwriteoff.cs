using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Warehousematerialwriteoff
    {
        public int WriteoffId { get; set; }
        public int MaterialId { get; set; }
        public int WarehouseId { get; set; }

        public virtual Writeoff Writeoff { get; set; }
    }
}
