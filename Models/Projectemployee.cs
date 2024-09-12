using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Projectemployee
    {
        public Projectemployee()
        {
            Attendences = new HashSet<Attendence>();
        }

        public int EmployeeId { get; set; }
        public int ProjectId { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual Project Project { get; set; }
        public virtual ICollection<Attendence> Attendences { get; set; }
    }
}
