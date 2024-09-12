

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.ProjectMaterialRequestReport
{
    public class materialrequestReportDto
    {
        public string ClientName { get; set; }
        public string UrgencyLevelName { get; set; }

        public DateTime RequestDate { get; set; }
        public string StatusName { get; set; }
        public int materialCount { get; set; }
        public int MaterialId { get; set; }

    }
}
