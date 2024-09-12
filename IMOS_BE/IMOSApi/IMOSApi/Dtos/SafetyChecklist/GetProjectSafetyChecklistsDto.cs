using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.SafetyChecklist
{
    public class GetProjectSafetyChecklistsDto
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public string projectName { get; set; }
        public int SafetyfileitemId { get; set; }
        public string name { get; set; }
        public int SafetyitemcategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
