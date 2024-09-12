using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Incident
    {
        public Incident()
        {
           // Projects = new HashSet<Project>();
        }

        public int IncidentId { get; set; }
        public string Description { get; set; }
        public int ProjectId { get; set; }

        public DateTime Date { get; set; }

       // public int ProjectId { get; set; }

        public virtual Project Projects { get; set; }
    }
}
