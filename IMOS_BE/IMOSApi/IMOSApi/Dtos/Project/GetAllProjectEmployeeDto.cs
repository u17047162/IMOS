using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Project
{
    public class GetAllProjectEmployeeDto
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }
        public int EmployeeId { get; set; }
        public string Role { get; set; }
        public int UserroleId { get; set; }
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }

    }
}
