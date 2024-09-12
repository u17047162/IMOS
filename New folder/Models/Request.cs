
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Request
    {
        public Request()
        {
            Projects = new HashSet<Project>();
        }

        public Request(int id)
        {
            Id = id;
        }

        public int RequestId { get; set; }
        public int ClientId { get; set; }
        public string Description { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
        public int Id { get; }
    }
}
