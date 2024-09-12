using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Suppliertype
    {
        public Suppliertype()
        {
            Suppliers = new HashSet<Supplier>();
        }

        public int SuppliertypeId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Supplier> Suppliers { get; set; }
    }
}
