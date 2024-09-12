using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Task
    {
        public Task()
        {
            Invoices = new HashSet<Invoice>();
            Taskmaterials = new HashSet<Taskmaterial>();
        }

        public Task(int id)
        {
            TaskId = id;
        }

        public int TaskId { get; set; }
        public int ProjectId { get; set; }
        public int TaskTypeId { get; set; }
        public int TaskStatusId { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public string Description { get; set; }
        public int Qnapassed { get; set; }

       
        public virtual Tasktype TasktypeNavigation { get; set; }

        public virtual TaskCompletionStatus Taskcompletionstatus { get; set; }
        public virtual Project Project { get; set; }
        public virtual ICollection<Invoice> Invoices { get; set; }
        public virtual ICollection<Taskmaterial> Taskmaterials { get; set; }
    }
}
