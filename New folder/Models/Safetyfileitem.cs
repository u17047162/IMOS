using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Safetyfileitem
    {
        public Safetyfileitem()
        {
            Safetyfilechecklists = new HashSet<Safetyfilechecklist>();
        }

        public int SafetyfileitemId { get; set; }
        public string Name { get; set; }
        public int SafetyitemcategoryId { get; set; }

        public virtual Safetyitemcategory Safetyitemcategory { get; set; }
        public virtual ICollection<Safetyfilechecklist> Safetyfilechecklists { get; set; }
    }
}
