using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Projectmaterialrequest
    {
        public Projectmaterialrequest()
        {

            Projectmaterialrequestlist = new HashSet<Projectmaterialrequestlist>();
        }



        public int ProjectmaterialrequestId { get; set; }
        public int ProjectId { get; set; }
        public int UrgencylevelId { get; set; }

        public int ProjectmaterialrequeststatusId { get; set; }

      //  [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime RequestDate { get; set; }
        public DateTime StatusUpdateDate { get; set; }

        public virtual Projectmaterialrequeststatus Projectmaterialrequeststatus { get; set; }

     //   public virtual Materialrequeststatus Materialrequestsstatus { get; set; }
        public virtual Project Project { get; set; }
        public virtual Urgencylevel Urgencylevel { get; set; }
        public virtual ICollection<Projectmaterialrequestlist> Projectmaterialrequestlist { get; set; }
    }
}
