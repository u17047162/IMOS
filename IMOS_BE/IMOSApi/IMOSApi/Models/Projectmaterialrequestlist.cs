using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Projectmaterialrequestlist
    {
      /*  public Projectmaterialrequestlist()
        {
            Requestnote = new HashSet<RequestNote>();
        }*/



        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProjectmaterialrequestlistId { get; set; }
        public int MaterialId { get; set; }
        public int ProjectmaterialrequestId { get; set; }
        public int Quantity { get; set; }

        public virtual Material Material { get; set; }
        public virtual Projectmaterialrequest Projectmaterialrequest { get; set; }

      //  public virtual ICollection<RequestNote> Requestnote { get; set; }    
    }
}
