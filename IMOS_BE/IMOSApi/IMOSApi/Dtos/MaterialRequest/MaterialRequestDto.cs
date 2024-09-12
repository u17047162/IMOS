using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Dtos.MaterialRequest;

namespace IMOSApi.Dtos.MaterialRequest
{
    public class MaterialRequestDto
    {
        public List<BasketMaterial> BasketMaterials { get; set; }
    }
}
