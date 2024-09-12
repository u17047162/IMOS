using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Safetyfilechecklist
    {
        public int ProjectId { get; set; }
        public int SafetyfileitemId { get; set; }

        public virtual Project Project { get; set; }
        public virtual Safetyfileitem Safetyfileitem { get; set; }
    }
}
