using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Suppliermaterial
    {
        public int MaterialId { get; set; }
        public int SupplierId { get; set; }

        public virtual Material Material { get; set; }
        public virtual Supplier Supplier { get; set; }
    }
}
