using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.MaterialRequest
{
    public class GetMaterialRequestDto
    {
        public int MaterialRequestId { get; set; }
        public int ProjectId { get; set; }
        public int UrgencyLevelId { get; set; }
        public string UrgencyLevelName { get; set; }
        public int FulfillmentType { get; set; }
        public DateTime RequestDate { get; set; }
        public DateTime StatusUpdateDate { get; set; }
        public string StatusName { get; set; }

        public virtual List<BasketMaterial> BasketMaterials { get; set; }

        public GetMaterialRequestDto()
        {
            BasketMaterials = new List<BasketMaterial>();
        }

    }
}
