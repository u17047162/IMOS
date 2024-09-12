using System.Collections.Generic;
using IMOSApi.Dtos.ProjectMaterials;

namespace IMOSApi.Dtos.ProjectMaterials
{
    public class GetProjectMaterialDto
    {
        public int ProjectMaterialId { get; set; }
        public int ProjectId { get; set; }
        public string MaterialName { get; set; }
        public string MaterialTypeName { get; set; }
        public string TypeDescription { get; set; }
        public int Quantity { get; set; }
        public int MaterialId { get; set; }
      //  public int MaterialId { get; set; }


        public virtual List<ProjectBasketMaterial> BasketMaterials { get; set; }

        public GetProjectMaterialDto()
        {
            
        }

    }
}
