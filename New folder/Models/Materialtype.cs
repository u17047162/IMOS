using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Materialtype
    {
        public Materialtype()
        {
            Materials = new HashSet<Material>();
        }

        public int MaterialtypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Material> Materials { get; set; }
    }
}
