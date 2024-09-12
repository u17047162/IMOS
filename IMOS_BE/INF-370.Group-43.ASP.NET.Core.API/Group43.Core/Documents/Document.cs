using Group43.Core.Employees;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group43.Core.Documents
{
  public  class Document
    {
        public int Id { get; set; }
        public string FileUrl { get; set; }
        public virtual Employee Employee { get; set; }
        public int EmployeeId { get; set; }

        public Document()
        {

        }
    }
}
