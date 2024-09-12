using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Userincident
    {
        public int UserId { get; set; }
        public int IncidentId { get; set; }

        public virtual Incident Incident { get; set; }
        public virtual User User { get; set; }
    }
}
