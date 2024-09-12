using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Taskmaterial
    {
        public int MaterialId { get; set; }
        public int TaskId { get; set; }

        public virtual Material Material { get; set; }
        public virtual Task Task { get; set; }
    }
}
