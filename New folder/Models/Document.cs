using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Document
    {
        public int DocumentId { get; set; }
        public string FileUrl { get; set; }
        public int EmployeeId { get; set; }
    }
}
