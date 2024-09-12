using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Writeoffreason
    {
        public Writeoffreason()
        {
            Writeoffs = new HashSet<Writeoff>();
        }

        public int WriteoffreasonId { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Writeoff> Writeoffs { get; set; }
    }
}
