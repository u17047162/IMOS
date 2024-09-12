using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Dtos.MaterialRequest;

namespace IMOSApi.Dtos.ProjectMaterials
{
    public class MaterialRequestDto
    {
        public List<ProjectBasketMaterial> BasketMaterials { get; set; }
    }
}
