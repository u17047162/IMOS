using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Projectmaterialrequestlist
    {
        public int MaterialId { get; set; }
        public int ProjectmaterialrequestId { get; set; }
        public int Quantity { get; set; }
        public int ProjectmaterialrequestlistId { get; set; }

        public virtual Material Material { get; set; }
        public virtual Projectmaterialrequest Projectmaterialrequest { get; set; }
    }
}
