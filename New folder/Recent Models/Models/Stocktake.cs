using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Stocktake
    {
        public Stocktake()
        {
            Warehousematerialstocktakes = new HashSet<Warehousematerialstocktake>();
        }

        public int StocktakeId { get; set; }
        public int UserId { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Warehousematerialstocktake> Warehousematerialstocktakes { get; set; }
    }
}
