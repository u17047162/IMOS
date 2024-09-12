using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class SafetyFile
    {
        public int SafetyFileId { get; set; }
        public string FileUrl { get; set; }
        public int ProjectId { get; set; }

        public virtual Project Project { get; set; }
    }
}
