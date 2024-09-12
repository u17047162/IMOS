using System.Collections.Generic;

namespace IMOSApi.Dtos.TaskMaterial
{
    public class GetTaskMaterialDto
    {
        public int TaskMaterialId { get; set; }
        public int ProjectId { get; set; }
        public string MaterialName { get; set; }
        public string MaterialTypeName { get; set; }
        public int Quantity { get; set; }

        public virtual List<TaskBasketMaterial> BasketMaterials { get; set; }

        public GetTaskMaterialDto()
        {
            BasketMaterials = new List<TaskBasketMaterial>();
        }
    }
}
