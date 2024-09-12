using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Warehousematerialstocktake
    {
        public int StocktakeId { get; set; }
        public int MaterialId { get; set; }
        public int WarehouseId { get; set; }
        public int? Quantity { get; set; }

        public virtual Stocktake Stocktake { get; set; }
    }
}
