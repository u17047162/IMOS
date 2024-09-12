
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.ConstructionSite
{
    public class GetConstructionSiteDto
    {
        public int Id { get; set; }
        public string Address { get; set; }

    }
}
