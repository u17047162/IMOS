using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Material
    {
        public Material()
        {
            Projectmaterialrequestlists = new HashSet<Projectmaterialrequestlist>();
            Projectmaterials = new HashSet<Projectmaterial>();
            Suppliermaterialorders = new HashSet<Suppliermaterialorder>();
            Suppliermaterials = new HashSet<Suppliermaterial>();
            Taskmaterials = new HashSet<Taskmaterial>();
            Warehousematerials = new HashSet<Warehousematerial>();
        }

        public int MaterialId { get; set; }
        public int MaterialtypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual Materialtype Materialtype { get; set; }
        public virtual ICollection<Projectmaterialrequestlist> Projectmaterialrequestlists { get; set; }
        public virtual ICollection<Projectmaterial> Projectmaterials { get; set; }
        public virtual ICollection<Suppliermaterialorder> Suppliermaterialorders { get; set; }
        public virtual ICollection<Suppliermaterial> Suppliermaterials { get; set; }
        public virtual ICollection<Taskmaterial> Taskmaterials { get; set; }
        public virtual ICollection<Warehousematerial> Warehousematerials { get; set; }
    }
}
