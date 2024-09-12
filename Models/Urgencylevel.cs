using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Urgencylevel
    {
        public Urgencylevel()
        {
            Projectmaterialrequests = new HashSet<Projectmaterialrequest>();
        }

        public int UrgencylevelId { get; set; }
        public string Level { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Projectmaterialrequest> Projectmaterialrequests { get; set; }
    }
}
