using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Incident
    {
        public int IncidentId { get; set; }
        public string Description { get; set; }
        public int ProjectId { get; set; }

        public virtual Project Project { get; set; }
    }
}
