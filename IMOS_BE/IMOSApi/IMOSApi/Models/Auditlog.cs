using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Auditlog
    {
        public int AuditlogId { get; set; }
        public string Operationtype { get; set; }
        public string Tablename { get; set; }
        public string Primarykey { get; set; }
        public string? Oldvalues { get; set; }
        public string? Newvalues { get; set; }
        public DateTime Datetimestap { get; set; }
        public string?Affectedcolumns { get; set; } 
        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}
