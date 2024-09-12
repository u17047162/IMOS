using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Projectmaterial
    {
        public int ProjectId { get; set; }
        public int MaterialId { get; set; }
        public int? Quantity { get; set; }

        public virtual Material Material { get; set; }
        public virtual Project Project { get; set; }
    }
}
