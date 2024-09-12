using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Invoice
    {
        public int InvoiceId { get; set; }
        public int ProjectId { get; set; }
        public int TaskId { get; set; }
        public int? Amount { get; set; }

        public virtual Project Project { get; set; }
        public virtual Task Task { get; set; }
    }
}
