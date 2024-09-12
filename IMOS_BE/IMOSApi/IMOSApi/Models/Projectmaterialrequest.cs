using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Projectmaterialrequest
    {
        public Projectmaterialrequest()
        {

            Projectmaterialrequestlist = new HashSet<Projectmaterialrequestlist>();
            RequestNotes = new HashSet<RequestNote>();
        }

    




        public int ProjectmaterialrequestId { get; set; }
        public int ProjectId { get; set; }
        public int UrgencylevelId { get; set; }
        public DateTime RequestDate { get; set; }
        public int ProjectmaterialrequeststatusId { get; set; }
        public DateTime StatusUpdateDate { get; set; }

        public virtual Project Project { get; set; }
        public virtual Projectmaterialrequeststatus Projectmaterialrequeststatus { get; set; }
        public virtual Urgencylevel Urgencylevel { get; set; }
        public virtual ICollection<Projectmaterialrequestlist> Projectmaterialrequestlist { get; set; }
        public virtual ICollection<RequestNote> RequestNotes { get; set; }
    }
}
