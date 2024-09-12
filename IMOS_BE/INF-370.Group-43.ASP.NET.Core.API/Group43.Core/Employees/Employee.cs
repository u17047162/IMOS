using Group43.Core.Documents;
using Group43.Core.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group43.Core.Employees
{
    public class Employee
    {
        public int Id { get; set; }

        public virtual AppUser AppUser { get; set; }
        public string AppUserId { get; set; }

        public virtual List<Document> Documents { get; set; }

        public Employee()
        {
            Documents = new List<Document>();
        }
    }  
}
