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

        public int TaskId { get; set; }
        public int Tasktype { get; set; }
        public int UserId { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public int Qnapassed { get; set; }
        public string Descriptiion { get; set; }
        public int ProjectId { get; set; }
        public int TaskcompletionstatusId { get; set; }

        public virtual Taskcompletionstatus Taskcompletionstatus { get; set; }
        public virtual Tasktype TasktypeNavigation { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Invoice> Invoices { get; set; }
        public virtual ICollection<Taskmaterial> Taskmaterials { get; set; }
    }
}
