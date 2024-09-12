using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Request
    {
        public Request()
        {
            Projects = new HashSet<Project>();
        }

        public int RequestId { get; set; }
        public int ClientId { get; set; }
        public string Description { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
    }
}
