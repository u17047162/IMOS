using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOSApi.Models;
using IMOSApi.Dtos.ProjectMaterials;


namespace IMOSApi.Dtos.ProjectMaterials
{
    public class ProjectBasketMaterial
    {
        public int id { get; set; }

        public string MaterialName { get; set; }
        public string MaterialTypeName { get; set; }

        public int MaterialTypeId { get; set; }
        public int quantity { get; set; }
        public string Description { get; set; }


      //  public virtual Materialtype MaterialType { get; set; }

    }
}
