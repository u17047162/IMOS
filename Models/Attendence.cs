using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Attendence
    {
        public int AttendenceId { get; set; }
        public int EmployeeId { get; set; }
        public int ProjectId { get; set; }
        public bool? Present { get; set; }
        public DateTime? Date { get; set; }

        public virtual Projectemployee Projectemployee { get; set; }
    }
}
