using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Taskcompletionstatus
    {
        public Taskcompletionstatus()
        {
            Tasks = new HashSet<Task>();
        }

        public int TaskcompletionstatusId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Task> Tasks { get; set; }
    }
}
