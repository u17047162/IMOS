using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.VehicleTree
{
    public class GetModelsTypes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Year { get; set; }
        public string Color { get; set; }
        public int BrandId { get; set; }

    }
}
