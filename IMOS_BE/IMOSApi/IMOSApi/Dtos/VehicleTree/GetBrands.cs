using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.VehicleTree
{
    public class GetBrands
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int VehicletypeId { get; set; }
    }
}
