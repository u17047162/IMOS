using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.MaterialRequest
{
    public class GetMaterialRequestByProjectDTO
    {
        public GetMaterialRequestByProjectDTO()
        {
            Materials = new List<MaterialRequestDetailsDTo>();
        }


        public int MaterialRequestId { get; set; }
        public int ProjectId { get; set; }
        public int UrgencyLevelId { get; set; }
        public string UrgencyLevelName { get; set; }
        public int FulfillmentType { get; set; }
        public string RequestDate { get; set; }
        public string StatusName { get; set; }

        public virtual ICollection<MaterialRequestDetailsDTo> Materials { get; set; }


    }
}


public class MaterialRequestDetailsDTo
{
    public string MaterialTypeName { get; set; }
    public int Quantity  { get; set; }
    public string MaterialName { get; set; }
    public string Description { get; set; }
}