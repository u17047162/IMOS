using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Projectmaterialrequeststatus
    {
        public Projectmaterialrequeststatus()
        {
            Projectmaterialrequests = new HashSet<Projectmaterialrequest>();
        }

        public int ProjectmaterialrequeststatusId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Projectmaterialrequest> Projectmaterialrequests { get; set; }
    }
}
