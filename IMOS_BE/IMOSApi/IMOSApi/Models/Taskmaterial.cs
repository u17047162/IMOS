using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Taskmaterial
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int TaskMaterialId { get; set; }
        public int ProjectMaterialId { get; set; }
        public int MaterialId { get; set; }
        public int TaskId { get; set; }
        public int Quantity { get; set; }

        public virtual Projectmaterial Projectmaterial { get; set; }
        public virtual Task Task { get; set; }
    }
}
