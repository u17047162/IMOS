using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Incident
    {
        public Incident()
        {
            Userincidents = new HashSet<Userincident>();
        }

        public int IncidentId { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Userincident> Userincidents { get; set; }
    }
}
