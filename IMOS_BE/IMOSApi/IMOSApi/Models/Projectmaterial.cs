using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Projectmaterial
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int ProjectMateriadId { get; set; }
        public int ProjectId { get; set; }
        public int MaterialId { get; set; }
        public int? Quantity { get; set; }

        public virtual Material Material { get; set; }
        public virtual Project Project { get; set; }
        public virtual ICollection<Taskmaterial> Taskmaterials { get; set; }
    }
}
