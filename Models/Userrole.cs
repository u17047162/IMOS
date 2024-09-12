using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Userrole
    {
        public Userrole()
        {
            Users = new HashSet<User>();
        }

        public int UserroleId { get; set; }
        public string Description { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
