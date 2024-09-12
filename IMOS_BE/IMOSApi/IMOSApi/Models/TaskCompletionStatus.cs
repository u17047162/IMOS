using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class TaskCompletionStatus
    {
        public TaskCompletionStatus()
        {
            Tasks = new HashSet<Task>();
        }

        public int TaskStatusId { get; set; }
        public string name { get; set; }

        public virtual ICollection<Task> Tasks { get; set; }
    }
}
