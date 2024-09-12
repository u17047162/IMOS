using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Tasktype
    {
        public Tasktype()
        {
            Tasks = new HashSet<Task>();
        }

        public int Tasktype1 { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Task> Tasks { get; set; }
    }
}
