using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Safetyitemcategory
    {
        public Safetyitemcategory()
        {
            Safetyfileitems = new HashSet<Safetyfileitem>();
        }

        public int SafetyitemcategoryId { get; set; }
        public string CategoryName { get; set; }

        public virtual ICollection<Safetyfileitem> Safetyfileitems { get; set; }
    }
}
