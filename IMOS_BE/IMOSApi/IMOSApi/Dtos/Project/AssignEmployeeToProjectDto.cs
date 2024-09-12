using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Project
{
    public class AssignEmployeeToProjectDto
    {
        public int ProjectId { get; set; }

        public List<EmployeeItemDto> Employees { get; set; }

        public AssignEmployeeToProjectDto()
        {
            Employees = new List<EmployeeItemDto>();
        }

        public class EmployeeItemDto
        {
            [Required]
            public int EmployeeId { get; set; }
        }


    }

}
