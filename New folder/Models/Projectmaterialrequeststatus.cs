using IMOSApi.Models;
using System;
using System.Collections.Generic;


namespace IMOSApi.Models
{
    public class Projectmaterialrequeststatus
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
