using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Materialrequeststatus
    {
        public Materialrequeststatus()
        {
            Projectmaterialrequests = new HashSet<Projectmaterialrequest>();
        }

        public int MaterialrequestsstatusId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Projectmaterialrequest> Projectmaterialrequests { get; set; }
    }
}
